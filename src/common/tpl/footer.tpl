<footer data-name='{%$name%}' style="background:{%$skin.footer%}">
    <p class="outlink">如需更多预约挂号服务，请到<a href="http://yi.baidu.com">百度医生>></a></p>
</footer>
<!-- <script src="../../vendor/jquery/jquery.min.js"></script> -->
<script src="http://cdn.bootcss.com/require.js/2.1.20/require.min.js"></script>
<script>
//define('global/path', {%$tplData.path|@json_encode%});
//define('global/hospi', {%$tplData.hospiData|@json_encode%});
requirejs.config({//../../src
    baseUrl: '{%$path%}',
    paths: {
        'jquery': '../vendor/jquery/jquery.min',
        'zepto':'../vendor/zeptojs/zepto.min',
        'slider':'../vendor/slider/1.0/slider'
        // 'home':'home/home',
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
// require(["home/home"],function(d){
//     // alert($+"--lin$");
//     console.log(d);
//     d.homeTest();
//     d.homePro();
// });
</script>
