define(['jquery','template','ckeditor','datepicker','language','uploadify','region'],function($,template,CKEDITOR){
    // 查询个人信息
    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function(data){
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            // 处理头像上传
            $('#upfile').uploadify({
                buttonText : '',
                itemTemplate : '<span></span>',
                width : '120',
                height : '120',
                fileObjName : 'tc_avatar',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                onUploadSuccess : function(file,data){
                    data = JSON.parse(data);
                    $('.preview img:eq(0)').attr('src',data.result.path);
                }
            });
            // 处理三级联动
            $('#hometown').region({
                url : '/public/assets/jquery-region/region.json'
            });
            // 富文本处理
            CKEDITOR.replace('editor',{
                toolbarGroups : [{
                        name: 'clipboard',
                        groups: ['clipboard', 'undo']
                    }, {
                        name: 'editing',
                        groups: ['find', 'selection', 'spellchecker', 'editing']
                    }
                ]
            });
        }
    });


});