define(['jquery','template','util','bootstrap'],function($,template,util){
    util.setMenu('/course/add');

    // 获取课程ID
    var csId = util.qs('cs_id',location.search);
    // 根据课程ID查询课时信息
    $.ajax({
        type : 'get',
        url : '/api/course/lesson',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
            // 实现课程预览功能
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
                    }
                });
            });
        }
    });
});