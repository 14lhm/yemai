<?php 
    header("content-type:text/html;charset=utf-8"); 
    $db = mysqli_connect("127.0.0.1","root","","yemaijiu");  
    $logobanner=isset($_REQUEST["logobanner"])?$_REQUEST["logobanner"] : 0;
    $turnimg=isset($_REQUEST["turnimg"])?$_REQUEST["turnimg"] : 0;
    $goodsrank=isset($_REQUEST["goodsrank"])?$_REQUEST["goodsrank"] : 0;
    $hot=isset($_REQUEST["hot"])?$_REQUEST["hot"] : 0;
    $goodslist=isset($_REQUEST["goodslist"])?$_REQUEST["goodslist"] : 0;
    $imglist=isset($_REQUEST["imglist"])?$_REQUEST["imglist"] : 0;
    $title=isset($_REQUEST["title"])?$_REQUEST["title"] : 0;
    $friend=isset($_REQUEST["friend"])?$_REQUEST["friend"] : 0;
    $imglang=isset($_REQUEST["imglang"])?$_REQUEST["imglang"] : 0;
    $like=isset($_REQUEST["like"])?$_REQUEST["like"] : 0;
    $shoplist=isset($_REQUEST["shoplist"])?$_REQUEST["shoplist"] : 0;
    $list=isset($_REQUEST["list"])?$_REQUEST["list"] : 0;
    if($logobanner){
        
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM headlogo";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($turnimg){
        //$db = mysqli_connect("127.0.0.1","root","","turnimg");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM turnimg";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($goodsrank){
       // $db = mysqli_connect("127.0.0.1","root","","goodsrank");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM goodsrank";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($hot){
        //$db = mysqli_connect("127.0.0.1","root","","hot");  
        mysqli_query($db, "set names 'utf8'");
        $sql1 = "SELECT * FROM hotber";
        $sql2 = "SELECT * FROM hollsell";
        $sql3 = "SELECT * FROM spesell";
        $sql4 = "SELECT * FROM oldber";
        $sql5 = "SELECT * FROM goodber";
        $result1 = mysqli_query($db,$sql1);
        $result2 = mysqli_query($db,$sql2);
        $result3 = mysqli_query($db,$sql3);
        $result4 = mysqli_query($db,$sql4);
        $result5 = mysqli_query($db,$sql5);
        
        $data1 = mysqli_fetch_all($result1,MYSQLI_ASSOC);
        $data2 = mysqli_fetch_all($result2,MYSQLI_ASSOC);
        $data3 = mysqli_fetch_all($result3,MYSQLI_ASSOC);
        $data4 = mysqli_fetch_all($result4,MYSQLI_ASSOC);
        $data5 = mysqli_fetch_all($result5,MYSQLI_ASSOC);
   
        $data = array_merge($data1,$data2,$data3,$data4,$data5);
        echo json_encode($data,true);
    }
    else if($title){
        //$db = mysqli_connect("127.0.0.1","root","","hot");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM selectcard";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($goodslist){
        //$db = mysqli_connect("127.0.0.1","root","","goodslist");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM goodslist";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($imglist){
        //$db = mysqli_connect("127.0.0.1","root","","imglist");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM imgten";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($friend){
        //$db = mysqli_connect("127.0.0.1","root","","footmain");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM friend";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($imglang){
        //$db = mysqli_connect("127.0.0.1","root","","imglang");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM imglang";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($like){
        //$db = mysqli_connect("127.0.0.1","root","","likeber");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM likeber";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($shoplist){
        //$db = mysqli_connect("127.0.0.1","root","","shoplist");  
        mysqli_query($db, "set names 'utf8'");
        $sql = "SELECT * FROM shoplist";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }
    else if($list){

       // $db = mysqli_connect("127.0.0.1","root","","list");
        mysqli_query($db, "set names 'utf8'");

        
        $page = ($_REQUEST["page"] -1 ) * 30;
        $sql = "SELECT * FROM listall LIMIT $page, 30";
        $result = mysqli_query($db,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode($data,true);
    }


?>