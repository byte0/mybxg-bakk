define(['jquery','util','template'],function($,util,template){
    // 设置导航选中
    util.setMenu('/teacher/list');
    // 提交表单处理
    $('#addTeacherBtn').click(function(){
        $.ajax({
            type : 'post',
            url : '/api/teacher/add',
            data : $('#addTeacherForm').serialize(),
            dataType : 'json',
            success : function(data){
                console.log(data);
            }
        });
    });
    // 获取参数中tc_id
    var tcId = util.qs('tc_id',location.search);
    if(tcId){
        // 编辑讲师操作
        // 根据ID查询数据
        $.ajax({
            type : 'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},
            dataType : 'json',
            success : function(data){
                $('#navFlag').html('讲师编辑');
                data.result.operateFlag = '编辑';
                var html = template('teacherFormTpl',data.result);
                $('#teacherFormInfo').html(html);
            }
        });
    }else{
        // 添加讲师操作
        $('#navFlag').html('讲师添加');
        var html = template('teacherFormTpl',{operateFlag:'添加'});
        $('#teacherFormInfo').html(html);
    }
    

});