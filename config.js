/*
 * @file   The gulpfile for current project
 * @author linkxiao(xiaofengyan@baidu.com)
 * @date   2015/11/10
 */
require.config({
    baseUrl: 'src',
    paths: {
        'jquery': '../vendor/jquery/jquery.min',
        'zepto':'../vendor/zeptojs/zepto.min',
        'slider':'../vendor/slider/1.0/slider'
    },
    shim: {
        "jquery" : {
            exports: '$'
        },
        "zepto" : {
            exports: '$'
        },
        "slider" : {
          deps:['zepto']//定义依赖关系
        }
    }
});
