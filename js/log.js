$(()=>{
    new Promise(function(res,rej){
        $("#register_head").load("/yemai/template/loghead.html",null,function(){
            res()
        })
    }).then(function(){
        $("footer").load("/yemai/template/footer.html")
    }).then(function(){

        $(".txt-input").on("input",function(){
            if(this.name=="loginName"){
                if($(this).val()==""){
                    $(this).addClass("hint-user")
                }
                else{
                    $(this).removeClass("hint-user") 
                }
            }
            else if(this.name=="loginPassword"){
                if($(this).val()==""){
                    $(this).addClass("hint-password")
                }
                else{
                    $(this).removeClass("hint-password")
                }
            }
        })
        $(".btn-login").click(function(e){
            $.ajax({
                type:"post",
                url:"/yemai/server/log.php",
                data:{
                    username:$(".txt-user").val(),
                    password:$(".txt-pass").val()
                },
                success:function(data){
                    console.log(data);
                }
            })
            e.preventDefault()
        })
    })
})

