<script src="http://requirejs.org/docs/release/2.1.20/comments/require.js"></script>

<script>
requirejs.config({//../../src
    baseUrl: '../../src',
    paths: {
        'require': '../vendor/requirejs/require',
        'jquery': '../vendor/jquery/jquery.min',
        'zepto':'../vendor/zeptojs/zepto.min'
    },
    shim: {
        "require" : {
            exports: 'require'
        },
        "jquery" : {
            exports: '$'
        },
        "zepto" : {
            exports: '$'
        }
    }
});
</script>
