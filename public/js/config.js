requirejs.config({
    baseUrl : '/public/assets',//设置模块加载的基准路径
    paths : {// 给模块路径起一个别名
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        cookie : 'jquery-cookie/jquery.cookie',
        template : 'artTemplate/template-web',
        nprogress : 'nprogress/nprogress',
        common : '../js/common',
        index : '../js/index',
        login : '../js/login',
        util : '../js/util',
        tealist : '../js/teacher-list',
        teaadd : '../js/teacher-add'
    },
    shim : {// 兼容非标准模块
        bootstrap : {
            deps : ['jquery']
        }
    }
});