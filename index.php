<?php 
    // 后端路由

    // 路径
    $path = 'index';
    // 文件名称
    $filename = 'index';
    // 判断数组中是否包含对应的key
    if(array_key_exists('PATH_INFO',$_SERVER)){
        // 获取URL中的路径
        $url = $_SERVER['PATH_INFO'];// /index/login
        // substr 截取字符串
        $str = substr($url, 1); // index/login
        $pathinfo = explode('/', $str);//根据/分割字符串，结果就是数组
        if(count($pathinfo) == 2){
            // 两层路径 /index/index
            $path = $pathinfo[0];
            $filename = $pathinfo[1];
        }else{
            // 一层路径 /login
            $filename = 'login';
        }
    }
    // 在当前页码嵌入另一个页码
    include('/view/'.$path.'/'.$filename.'.html');
 ?>