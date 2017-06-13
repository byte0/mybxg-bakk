requirejs.config({
    baseUrl : '/public/assets',//设置模块加载的基准路径
    paths : {// 给模块路径起一个别名
        jquery : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        cookie : 'jquery-cookie/jquery.cookie',
        template : 'artTemplate/template-web',
        nprogress : 'nprogress/nprogress',
        validate : 'validate/jquery-validate',
        form : 'jquery-form/jquery.form',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        uploadify : 'uploadify/jquery.uploadify.min',
        region : 'jquery-region/jquery.region',
        ckeditor : 'ckeditor/ckeditor',
        common : '../js/common',
        index : '../js/index',
        login : '../js/login',
        util : '../js/util',
        tealist : '../js/teacher-list',
        teaadd : '../js/teacher-add',
        settings : '../js/settings',
        courselist : '../js/course-list',
        courseadd : '../js/course-add',
        coursebasic : '../js/course-basic',
        coursepicture : '../js/course-picture',
    },
    shim : {// 兼容非标准模块
        bootstrap : {
            deps : ['jquery']
        },
        validate : {
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        },
        uploadify : {
            deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR'
        }
    }
});