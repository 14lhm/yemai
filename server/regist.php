 <?php 

    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $phone    = $_REQUEST["phone"];  

    # (2) 通过PHP代码来操作数据库
    # 001 先连接数据库
    $db = mysqli_connect("127.0.0.1","root","","yemaijiu");

    # 002 先检查当前的用户名是否已经被注册,如果已经被注册，返回错误的提示信息。
    $sql = "SELECT * FROM usermsg WHERE username = '$username'";

    #执行查询语句
    $result = mysqli_query($db, $sql);
    //print_r($result)

    $response = array("status"=>"","msg"=>"");
    if(mysqli_num_rows($result) == 1)
    {
    /* 该用户名已经被注册！！ */
        $response["status"] = "error";
        $response["msg"] = " 该用户名已经被注册！！";
        echo json_encode($response,true);
    }else{
    /* 执行插入语句 */
        $insertSql = "INSERT INTO `yemaijiu`.`usermsg` (`id`, `username`, `password`, `phone`) VALUES (NULL, '$username', '$password', '$phone')";
        $res = mysqli_query($db, $insertSql);
        // echo $insertSql ;
        $response["status"] = "ok";
        $response["msg"] = " 恭喜您注册成功！";
        echo json_encode($response, true);
    }

?>