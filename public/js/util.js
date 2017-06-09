define(['jquery'],function($){
    return {
        setMenu : function(pathname){
            $('.aside .navs a').removeClass('active');
            $('.aside .navs a[href="'+pathname+'"]').addClass('active');
        }
    }
});