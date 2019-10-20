<?php
    header('Access-Control-Allow-Origin:*');
    $db = mysqli_connect("127.0.0.1", "root", "", "yemaijiu");
    $username=$_POST["username"];
    $password=$_POST["password"];
    
    $sql = "SELECT * FROM usermsg WHERE username = '$username'";
    $result = mysqli_query($db, $sql);

    if (mysqli_num_rows($result) == 0)
    {
        $response["status"] = "error";
        $response["msg"] = "该用户不存在！！";
        echo json_encode($response, true);
    }else{
      # (2) 如果用户存在，那么继续检查密码是否正确，如果不正确，提示(密码不正确)
      // print_r(mysqli_fetch_all($result,MYSQLI_ASSOC));
      $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        print_r($data);
      if($data[0]["password"] != $password)
      {
        $response["status"] = "error";
        $response["msg"] = "密码不正确！！";
        echo json_encode($response, true);
      }else{
    
      # (3) 如果用户名和密码都匹配那么就 提示登录成功 => 跳转到首页
        $response["status"] = "success";
        $response["msg"] = "登录成功";
        echo json_encode($response, true);
      }
    }
?>