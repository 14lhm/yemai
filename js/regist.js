$(()=>{
    new Promise(function(res,rej){
        $("#register_head").load("/yemai/template/loghead.html",null,function(){
            res()
        })
    }).then(function(){
        $("footer").load("/yemai/template/footer.html")
    }).then(function(){
        var flag=0;
        var iftrue=0;
        var randomNumber=null;
        let cap = new CaptchaMini({
            fontSize: 30,
            length: 5,
            content: "adshdfsnf234j35uetege5",
            lineNum: 3,
            dotNum: 20
        });
        //let imgCode;
        cap.draw(document.querySelector('#captcha'), r => {
            console.log("验证码 = " + r);
            imgCode = r;

            $(".txt-input").eq(1).on("input",function(){
                let val = $(this).val().trim();
                if (val==r) {
                    $(this).siblings(".error").addClass("hidden")
                    flag+=1;
                    iftrue+=1;
                   
                } else {
                    $(this).siblings(".error").text("验证码不正确")
                    $(this).siblings(".error").removeClass("hidden")
                    
                }
            });
            
        });

        $(".txt-input").on("input",function(){
            
            if($(this).val()==""){
                $(this).removeClass("bg")
            }
            else{
                $(this).addClass("bg")
            }
            //$(this).addClass("bg")
        })
        $(".txt-input").eq(0).on("input",function(){
            let val = $(this).val().trim();
            console.log(/^1[3-9]\d{9}$/.test(val));
            
            if (/^1[3-9]\d{9}$/.test(val)) {
                $(this).siblings().eq(0).addClass("hidden")
                flag+=1;
                iftrue+=1;
               
            } else {
                console.log($(this).siblings().eq(0));
                $(this).siblings().eq(0).text("手机号码不正确")
                $(this).siblings().eq(0).removeClass("hidden")
            }
        });
        $("#registerPassword").on("input",function() {
            let val = $(this).val().trim();
            /*密码长度6-10字符（大小写字母和数字）  */
            if (/^[0-9a-zA-Z]{6,10}$/.test(val)) {
                $(this).siblings().eq(0).addClass("hidden")
                iftrue+=1;
            } else {
                $(this).siblings().eq(0).text("密码不符合规范")
                $(this).siblings().eq(0).removeClass("hidden")
            }
        })
        $("#rePassword").on("input",function() {
            let val = $(this).val().trim();
            let targetVal = $("#registerPassword").val().trim();
            /* 监听输入框失去焦点的事件，当输入框失去焦点的时候获取当前的内容和第一次输入的密码进行匹配 */
            if (targetVal === val) {
                $(this).siblings().eq(0).addClass("hidden")
                iftrue+=1;
            } else {
                $(this).siblings().eq(0).text("两次输入的密码不一致")
                $(this).siblings().eq(0).removeClass("hidden")
            
            }
        });
        $("#getcheckcode").click(function(){
            if (flag!=2){
                return;
            } 
            //randomNumber = Math.floor(Math.random()*8999)+1000;
            randomNumber=1111;
            console.log($("#registerMobile").val());
            
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/28-1',
                dataType: 'json',
                data: {
                    "showapi_appid": '91032', //这里需要改成自己的appid
                    "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
                    "mobile": $("#registerMobile").val(),
                    "content": `{"name":"hahaha","code":${randomNumber},"minute":"3","comName":"脑子进水集团"}`,
                    "tNum": "T150606060601",
                },
                success: (result) => {
                    console.log("手机验证码",randomNumber);
                    $("#smsCode").on("input",function(){
                        let val = $(this).val().trim();
                        
                        
                        if (val == randomNumber) {

                            $(this).siblings(".error").addClass("hidden")
                            iftrue+=1;
                        } else {
                            $(this).siblings(".error").text("手机验证码不正确")
                            $(this).siblings(".error").removeClass("hidden")
                            
                        }
                    })
                }
            });
            
        })

        console.log($("#toregist"));
        
        $("#toregist").on("click",function(){
            
            
            var c=document.querySelector("#ifaccept")
            
            
            
            if(!c.checked){
                console.log(11111);
                $("#ifaccept").siblings(".error").text("请同意")
                $("#ifaccept").siblings(".error").removeClass("hidden")
            }
            else{
                console.log(iftrue);
                $("#ifaccept").siblings(".error").addClass("hidden")
                if(iftrue==5){
                    console.log(66666);
                    $.ajax({
                        type:"post",
                        url:"/yemai/server/regist.php",
                        data:{
                            username:$("#registerMobile").val(),
                            password:$("#registerPassword").val(),
                            phone:$("#registerMobile").val()
                        },
                        success:function(data){
                            console.log(data);
                            
                            var data=JSON.parse(data);
                            //console.log(data,data.status=="error");
                            window.location.href="http://127.0.0.1/yemai/html/login.html";
                            if(data.status=="error"){
                                console.log();
                                
                                $(".registerMobileError").text(data.msg)
                                $(".registerMobileError").removeClass("hidden")
                            }
                            
                        }
                    })
                }
                else{
                    console.log(44444);
                    
                }
            }
        })


       




        




    })
})
// $.ajax({
//     type:"post",
//     url:"./server/regist.php",
//     data:{
//         username:"lw",
//         password:"888888",
//         phone:"13411111111"
//     },
//     success:function(data){
//         console.log(data);
//     }
// })