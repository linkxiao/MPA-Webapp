/*
 * @file   The gulpfile for current project
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/11/12
 */


var gulp = require('gulp');
var connect=require('gulp-connect-php');//glup环境下的php webserver

var clean = require('gulp-clean');//clear清空
var less = require('gulp-less');//less编译
var minifyCSS = require('gulp-minify-css');//css压缩
var path = require('path');//路径管理
var rename = require('gulp-rename');//重命名
var imagemin = require('gulp-imagemin');//图片压缩

//var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');//file/css/js压缩
var requirejsOptimize = require('gulp-requirejs-optimize'); //按照AMD规范打包压缩js，可自由配置

var htmlmin = require('gulp-htmlmin');// html压缩
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var runSequence = require('run-sequence');//进行task排序
//var fs=require('fs');



//ps:路径不要加"./","watch"不支持
var appRoot="./";//根目录
var srcRoot = "src/";//开发环境
var vendorDir="vendor/";//第三方插件
var distDir="assets/";//静态资源
var revDir="md5/";//增量更新目录
var releaseDir="release/";//生产环境目录(发布)

var paths = {
    "jss" : [
      srcRoot+'*.js',
      srcRoot+'*/*.js',
      srcRoot+'**/*.js'
    ],
    "lesses":[
      srcRoot+'*.less',
      srcRoot+'*/*.less',
      srcRoot+'**/*.less',
      vendorDir+'***/*.less'
    ],
    "imgs":''+srcRoot+'common/img/**',
    "tpls":[
      srcRoot+'**/*.tpl',
      srcRoot+'*/*.tpl'
    ],
    "devDir":[
      srcRoot,
      srcRoot+'*/',
      srcRoot+'**/'
    ],
};


//生成时间戳
 var vTime=new Date().getTime();
     console.log(vTime);
 var release=''+releaseDir+''+vTime+'/'+distDir+'';//生产环境目录:统一管理
 var revRelease=''+releaseDir+''+revDir+'/'+distDir+'';//生产环境目录:md5分文件版本管理

    gulp.task('server',function(){//php webserver
    	connect.server();
    });


    // tpl处理
    gulp.task('tpl', function() {
      return gulp.src(paths.tpls)
              .pipe(gulp.dest(release));//releaseDir
      });


    // 图片无损压缩处理
    gulp.task('img', function(){
      return gulp.src(paths.imgs)//'src/common/img/zryh/*'
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest(release+'/common/img/'));
    });
    gulp.task('revImg', function(){
      return gulp.src(paths.imgs)//'src/common/img/zryh/*'
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(rev())//单个文件版本管理
        .pipe(gulp.dest(releaseDir+revDir+distDir+'/common/img/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(releaseDir+revDir+'rev/img/'));
    });


    //less预编译(开发环境下)
    gulp.task('devcss', function() {
        return gulp.src(''+srcRoot+'*/*.less')
            .pipe(less())
            .pipe(gulp.dest(srcRoot));
    });

    //css合并压缩连接(统一批处理)
    gulp.task('css', function() {
        return gulp.src(paths.lesses)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(gulp.dest(release));
    });
    //css合并压缩连接(md5分文件分版本处理)
    gulp.task('revCss', function() {
        return gulp.src(paths.lesses)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(rev())//单个文件版本管理
            .pipe(gulp.dest(revRelease))
            .pipe(rev.manifest())
            .pipe(gulp.dest(releaseDir+revDir+'rev/css/'));
    });


    //js合并压缩连接(统一批处理)
    gulp.task('js', function(){
    	return gulp.src(paths.jss)
        .pipe(requirejsOptimize({
  			 mainConfigFile: 'config.js'
		    }))
    		.pipe(uglify())
        .pipe(gulp.dest(release));
    });
    //js合并压缩连接(md5分文件分版本处理)
    gulp.task('revJs', function(){
    	return gulp.src(paths.jss)
        .pipe(requirejsOptimize({
  			 mainConfigFile: 'config.js'
		    }))
    		.pipe(uglify())
        .pipe(rev())//单个文件版本管理
        .pipe(gulp.dest(revRelease))
        .pipe(rev.manifest())//单个文件版本管理
        .pipe(gulp.dest(releaseDir+revDir+'rev/js/'));
    });


    gulp.task('revChange', function() {
        gulp.src(['./release/md5/rev/*/*.json', './src/*/*.tpl','./src/**/*.tpl','./src/*/*.css','./release/md5/assets/*/*.css'])//- 读取 rev-manifest.json 文件以及需要进行css/js名替换的文件
            .pipe(revCollector()) //- 执行文件内(html)css/js文件名的替换
            .pipe(gulp.dest('./release/md5/assets'));//- change后的文件输出的生产环境目录
    });


    gulp.task('clean', function () {//
         return gulp.src(releaseDir)
             .pipe(clean({force: true}));
             //.pipe(gulp.dest('dist'));
     });


    //统一批量处理任务:输出到生产环境
    gulp.task('release', function() {
        console.log(vTime);
        runSequence('clean', ['tpl','img','css','devcss','js']);
    });

  //md5分文件分版本处理:输出到生产环境
    gulp.task('revRelease',function(){
      runSequence('clean',['revImg','revCss','revJs'],'revChange',function(){
      });
      console.log(vTime);
    });

    //监听:
    gulp.task('watch',function(){
        gulp.run('revChange');
      gulp.watch(paths.tpls, function(event){
            gulp.run('tpl');
      })
      gulp.watch(paths.imgs, function(event){
            gulp.run('img');
      })
      gulp.watch(paths.lesses, function(){
            gulp.run('devcss');
            gulp.run('css');
            gulp.run('revCss');
            gulp.run('revChange');
      })
      gulp.watch(paths.jss, function(){
            gulp.run('js');
            gulp.run('revJs');
            gulp.run('revChange');
      })
      gulp.run('revChange');
    }).on('change', function(event) {
        gulp.run('revChange');
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  gulp.task('default', ['server','release','revRelease','watch'], function() {
  });
