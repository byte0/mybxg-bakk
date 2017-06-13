define(['jquery','template','util','uploadify'],function($,template,util){
    util.setMenu('/course/add');
    // 获取课程ID
    var csId = util.qs('cs_id',location.search);
    // 查询课程封面信息
    $.ajax({
        type : 'get',
        url : '/api/course/picture',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            var html = template('pictureTpl',data.result);
            $('#pictureInfo').html(html);
            // 上传封面操作
            $('#upfile').uploadify({
                width : 100,
                height : 'auto',
                buttonText : '上传图片',
                buttonClass : 'btn btn-success btn-sm',
                itemTemplate : '<span></span>',
                formData : {cs_id : csId},
                fileObjName : 'cs_cover_original',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/cover',
                onUploadSuccess : function(file,data){
                    data = JSON.parse(data);
                    $('.preview img:eq(0)').attr('src',data.result.path);
                }
            });
        }
    });
});