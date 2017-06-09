define(['jquery','template','cookie'],function($,template){
    // 控制左侧菜单的展开和折叠
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    // 实现退出功能
    $('#logout').click(function(){
        $.ajax({
            type : 'post',
            url : '/api/logout',
            dataType : 'json',
            success : function(data){
                location.href = '/login';
            }
        });
    });
    // 获取请求路径
    var pathname = location.pathname;
    // 判断用户是否已经登录要通过PHPSESSID判断
    if(pathname != '/login' && !$.cookie('PHPSESSID')){
        // 没有登录的情况要重新跳转到登录页面
        location.href = '/login';
    }
    // 获取登录用户的cookie信息
    var loginInfo = $.cookie('loginInfo') && JSON.parse($.cookie('loginInfo'));
    if(loginInfo){
        var loginTpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
        var html = template.render(loginTpl,loginInfo);
        $('#loginInfoTpl').html(html);
        // 渲染页面
        // $('.aside .profile').find('img').attr('src',loginInfo.tc_avatar);
        // $('.aside .profile').find('h4').text(loginInfo.tc_name);
    }

    
});
