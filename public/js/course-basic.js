define(['jquery','template','util'],function($,template,util){
    // 设置导航菜单选中
    util.setMenu('/course/add');
    // 获取课程id
    var csId = util.qs('cs_id',location.search);
    if(csId){
        // 编辑操作
        // 根据课程id查询课程的详细信息
        $.ajax({
            type : 'get',
            url : '/api/course/basic',
            data : {cs_id : csId},
            dataType : 'json',
            success : function(data){
                var html = template('courseBasicTpl',data.result);
                $('#courseBasicInfo').html(html);
            }
        });
    }else{
        // 添加操作
        var html = template('courseBasicTpl',{});
        $('#courseBasicInfo').html(html);
    }
});