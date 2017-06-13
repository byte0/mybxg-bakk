define(['jquery','template','util','bootstrap','form'],function($,template,util){
    util.setMenu('/course/add');

    // 获取课程ID
    var csId = util.qs('cs_id',location.search);

    // 课时信息表单提交功能
    function submitForm(url,ctId){
        var param = {ct_cs_id:csId,ct_is_free:$('#freeFlag:checked').size()==0?0:1};
        if(ctId){
            param['ct_id'] = ctId;
        }
        // 处理表单提交
        $('#lessonFormBtn').click(function(){
            $('#lessonForm').ajaxSubmit({
                type : 'post',
                url : url,
                data : param,
                success : function(data){
                    if(data.code == 200){
                        location.reload();
                    }
                }
            });
        });
    }
    // 根据课程ID查询课时信息
    $.ajax({
        type : 'get',
        url : '/api/course/lesson',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
            // 实现课程编辑功能
            $('.lessonedit').click(function(){
                var ctId = $(this).attr('data-ctId');
                $.ajax({
                    type : 'get',
                    url : '/api/course/chapter/edit',
                    data : {ct_id : ctId},
                    dataType : 'json',
                    success : function(data){
                        var html = template('lessonModalTpl',data.result);
                        $('#lessonModalInfo').html(html);
                        $('#chapterModal').modal();
                        submitForm('/api/course/chapter/modify',ctId);
                    }
                });
            });
            // 实现添加课时功能
            $('#lessonAddBtn').click(function(){
                var html = template('lessonModalTpl',{});
                $('#lessonModalInfo').html(html);
                $('#chapterModal').modal();
                submitForm('/api/course/chapter/add');
            });
        }
    });
});

