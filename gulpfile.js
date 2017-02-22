/*
 * @file   The gulpfile for current project
 * @author linkxiao(linkxiao@icloud.com)
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

var runSequence = require('run-sequence');//task schedule

//md5版本管理:实现增量更新
//expaln:增量更新是指在进行更新操作时，只更新改变的文件，未发生变化或者已经更新过的文件则不会重复更新
var rev = require('gulp-rev');//md5文件管理
var revCollector = require('gulp-rev-collector');//md5版本控制



//ps:路径不要加"./","watch"不支持
var appRoot="./";//根目录
var srcRoot = "src/";//开发环境
var viewRoot = "views/";//开发环境
var vendorDir="vendor/";//第三方插件
var distDir="assets/";//静态资源
var revDir="md5/";//md5版本目录
var releaseDir="release/";//生产环境目录(发布)

var paths = {
    "jss" : [
      srcRoot+'*.js',
      srcRoot+'*/*.js',
      srcRoot+'**/*.js'
    ],
    "lesses":[
      //srcRoot+'*.less',
      srcRoot+'*/*.less',
      srcRoot+'**/*.less'
      //vendorDir+'***/*.less'
    ],
    "imgs":''+srcRoot+'common/img/**',
    "tpls":[
      srcRoot+'**/*.tpl',
      srcRoot+'*/*.tpl'
    ],
    "templates":[
      viewRoot+'*.tpl',
      viewRoot+'*/*.tpl'
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
  var release=''+releaseDir+''+vTime+'/';//生产环境目录:统一管理
  //var release=''+releaseDir+''+vTime+'/'+distDir+'';//生产环境目录:统一管理
  var revRelease=''+releaseDir+''+revDir+'/'+distDir+'';//生产环境目录:md5分文件版本管理:release/md5/assets

  //php webserver
  gulp.task('server',function(){
    connect.server({
      hostname: '127.0.0.1',//配置你的主机ip
      port: 8090//配置你的端口号
    });
  });


    // 处理tpl(由于没找到好用的tpl压缩插件，该操作仅仅用于输出tpl模版文件)
    gulp.task('tpl', function() {
      return gulp.src(paths.templates)
              .pipe(gulp.dest(release+viewRoot));//releaseDir
      });

    // 图片无损压缩处理(通用模式：统一版本管理)
    gulp.task('img', function(){
      return gulp.src(paths.imgs)//'src/common/img/zryh/*'
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest(release+distDir+'/common/img/'));
    });
    // 图片无损压缩处理(增量模式:md5版本管理)
    gulp.task('revImg', function(){
      return gulp.src(paths.imgs)//'src/common/img/zryh/*'
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(rev())//监听文件是否改变
        .pipe(gulp.dest(releaseDir+revDir+distDir+'/common/img/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest(releaseDir+revDir+'rev/img/'));
    });


    //css预编译(Debug模式:develop环境)
    gulp.task('devcss', function() {
        return gulp.src(''+srcRoot+'*/*.less')
            .pipe(less())
            .pipe(gulp.dest(srcRoot));
    });
    //css合并压缩连接(通用模式:统一版本管理)
    gulp.task('css', function() {
        return gulp.src(paths.lesses)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(gulp.dest(release+distDir));
    });
    //css合并压缩连接(增量模式:md5版本管理)
    gulp.task('revCss', function() {
        return gulp.src(paths.lesses)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(rev())//监听文件是否改变
            .pipe(gulp.dest(revRelease))
            .pipe(rev.manifest())
            .pipe(gulp.dest(releaseDir+revDir+'rev/css/'));
    });


    //js合并压缩连接(通用版本管理:统一版本管理)
    gulp.task('js', function(){
    	return gulp.src(paths.jss)
        .pipe(requirejsOptimize({
  			 mainConfigFile: 'config.js'
		    }))
    		.pipe(uglify())
        .pipe(gulp.dest(release+distDir));
    });
    //js合并压缩连接(增量模式:md5版本管理)
    gulp.task('revJs', function(){
    	return gulp.src(paths.jss)
        .pipe(requirejsOptimize({
  			 mainConfigFile: 'config.js'
		    }))
    		.pipe(uglify())
        .pipe(rev())//监听文件是否改变
        .pipe(gulp.dest(revRelease))
        .pipe(rev.manifest())
        .pipe(gulp.dest(releaseDir+revDir+'rev/js/'));
    });

   //执行task时,计算文件内容的改变，并将对应的变化生成一个json映射表,然后根据json表的对应映射关系将对应的文件打上md5戳:production(生产上线)
    gulp.task('revProductionChange', function() {
            gulp.src(['./release/md5/rev/*/*.json', './*/*.tpl','./*/common/*.tpl','./release/md5/*/*.tpl','./release/md5/**/*.css'])//读取rev-manifest.json(映射表),同步tpl/css/js文件并替换路径(md5版戳),'./release/md5/assets/*/*.css' , './src/*/*.css',   //'./*/*.tpl','./**/*.tpl', './release/md5/assets/*/*.css'
                .pipe(revCollector()) //- 执行文件内(html)css/js文件名的替换
                .pipe(gulp.dest('./release/md5/'));//- change后的文件输出的生产环境目录//assets
    });

    //实时计算文件内容的改变:debug(上线前调式)
    // gulp.task('revDebugChange',function(){
    //    return gulp.src(['./release/md5/rev/*/*.json','./src/*/*.tpl','./src/**/*.tpl','./release/md5/assets/*/*.css'])//读取rev-manifest.json(映射表),同步tpl/css/js文件并替换路径(md5版戳),'./src/*/*.tpl','./src/**/*.tpl', './release/md5/assets/*/*.css'
    //         .pipe(revCollector()) //- 执行文件内(html)css/js文件名的替换
    //         .pipe(gulp.dest('./release/md5/assets'));//- change后的文件输出的生产环境目录
    // });

    //监听:
    gulp.task('watch',function(){
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
            gulp.run('revProductionChange');
      })
      gulp.watch(paths.jss, function(){
            gulp.run('js');
            gulp.run('revJs');
            gulp.run('revProductionChange');
      })
      //gulp.run('revProductionChange');
    }).on('change', function(event) {
            gulp.run('revProductionChange');
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    gulp.task('clean', function () {//
         return gulp.src(releaseDir)
             .pipe(clean({force: true}));
     });

    //常规版本:统一批量处理任务,输出到生产环境
    gulp.task('release', function() {
        runSequence('clean', ['tpl','img','css','devcss','js']);
        console.log(vTime+"--release");
    });

  //md5版本:统一批量处理任务,输出到生产环境
    gulp.task('revRelease',function(){
      runSequence('clean',['revImg','revCss','revJs'],'revProductionChange',function(){
      });
      console.log(vTime+"-revRelease");
    });



  gulp.task('default', ['server','watch','release','revRelease'], function() {
  });
