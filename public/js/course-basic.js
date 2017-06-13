define(['jquery','template','util','ckeditor','validate','form'],function($,template,util,CKEDITOR){
    // 设置导航菜单选中
    util.setMenu('/course/add');
    // 获取课程id
    var csId = util.qs('cs_id',location.search);
    // 获取添加和编辑标志位
    var flag = util.qs('flag',location.search);
    // 根据课程id查询详细信息
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : {cs_id : csId},
        dataType : 'json',
        success : function(data){
            if(flag){
                // 编辑操作
                data.result.operateText = '课程编辑';
            }else{
                // 添加操作
                data.result.operateText = '课程添加';
            }
            // 渲染页面
            var html = template('courseBasicTpl',data.result);
            $('#courseBasicInfo').html(html);
            // 处理富文本
            CKEDITOR.replace('editor');
            // 处理分类联动操作
            // $('#firstCategory').on('change',function(){});
            $('#firstCategory').change(function(){
                // 事件函数内部的this指的是绑定事件的对象
                var cgId = $(this).find('option:selected').val();
                $.ajax({
                    type : 'get',
                    url : '/api/category/child',
                    data : {cg_id : cgId},
                    dataType : 'json',
                    success : function(data){
                        var tpl = '{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                        // var render = template.compile(tpl);
                        // var html = render({list : data.result});
                        var html = template.render(tpl,{list : data.result});
                        $('#secondCategory').html(html);
                    }
                });
            });
            // 处理表单提交
            $('#basicForm').validate({
                sendForm : false,
                valid : function(){
                    // 更新富文本内容
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
                    // 提交表单
                    $(this).ajaxSubmit({
                        type : 'post',
                        url : '/api/course/update/basic',
                        data : {cs_id : csId},
                        success : function(data){
                            if(data.code == 200){
                                location.href ='/course/picture?cs_id=' + data.result.cs_id;
                            }
                        }
                    });
                }
            });
        }
    });
        
});