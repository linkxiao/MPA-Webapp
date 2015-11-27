# The MPA Webapp for Direct

## 项目简介
- 这是一款基于MPA(性能与体验俱佳的Mobile轻应用快速解决方案)和Gulp(前端构建利器:edp,grunt比它弱爆了)的webapp。
- 基于MPA和MVM(设计开发模式)的webapp:体验好，性能佳;
- 基于Module的经典MVM:回归经典的开发模式;
- common和biz层充分解偶:common层作为公共组件和resoures的集合不处理具体的业务逻辑，biz层作为专门处理业务逻辑的模块高度解偶、
模块化和颗粒化，让工程师专注于biz层业务逻辑的实现；
- 良好的容错性:拨出一个module或其他module出了问题，其他模块不受影响，正常run;

## 环境搭建
- 安装:[nodejs](https://nodejs.org/en/)
- 安装[git](http://git-scm.com/)
- 安装[Gulp](http://gulpjs.com/) :npm install -g gulp(全局安装);
- 安装php-cgi:并将php-cgi可执行程序添加到环境变量中
### 关于安装php-cgi
- brew install php54 --with-cgi --with-debug , 如果提示远程服务挂镜,则执行如下命令:
- 终端输入以下:'sh -c "$( curl http://fouber.github.io/install-php-cgi/install-php.sh -k )" -o 5.4.38'命令;
- 如果两者都挂了，则复制插件:下载php-cgi(在百度中搜索"php-cgi for mac",如:php-mac.tar.gz)然后解压,将bin文件中的"php-cgi,phpize,php-config"文件至"/usr/local/bin/"下；


## 项目代码
```javascript
git clone http://gitlab.baidu.com/care-fe/superDirect
```

## 项目依赖
安装依赖

```bash
cd /path/to/superDirect
npm install
```

`npm install`时，如果不指定packageName，则会读取项目根目录下的`package.json`文件，取出其中的`dependencies`、`devDependencies`，然后安装所有依赖到`node_modules`目录下。

## 运行项目

启动服务器

```bash
gulp
gulp的执行文件全部写在gilpfile.js里,可以分批次，分任务执行多个task，如："gulp watch","gulp server","gulp build"等等。
```

**具体gulp使用文档请参考[gulp](https://github.com/gulpjs/gulp)**


## 项目部署

这个仓库存放的是fe源代码，部署时，需要将代码发布到rd的svn仓库上。

部署前请先运行:`gulp release(常规版本号管理)`或`gulp revRelease(引入md5文件版本号管理)`,进行工程打包，压缩和时间戳/版本号的构建。

`gulp release`中借用了`gulp plugs的压缩，目录构建等功能；

具体部署时，通常只需要做一下这些事：
- checkout rd的svn仓库到本地
- 将通过"gulp build"打包的"release"目录下的带时间戳的静态资源文件copy到svn下的fe发布目录
- svn add  
- svn commit

Ok,That's all.
