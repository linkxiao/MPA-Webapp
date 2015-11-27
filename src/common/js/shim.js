requirejs.config({
    paths: {
        'require': '../../../vendor/requirejs/require',
        'jquery': '../../../vendor/jquery/jquery.min',
        'zepto':'../../../vendor/zeptojs/zepto.min',
        'testJq': './common/js/testJq',
        'path':'./common/js/path',
        'popup':'./common/js/popup',
        'ip':'./common/js/ip',
    },

    shim: {
        "testJq":["zepto"],
        "path":["zepto"],
        "popup":["zepto"],
        "ip":["zepto"]
    }
});

// define(["testJq","path"],function(test,path){
// alert(path.srcRoot())
// });
