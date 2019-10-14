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

var img=[];
var title=[];
var price=[];
var user1=[];
var user2=[];
var name1=[];
var name2=[];
var code1=[];
var code2=[];
var context1=[];
var context2=[];
var data=[];
[...li].forEach(ele=>img.push(ele.querySelector(".pimg").querySelector("img").src));
[...li].forEach(ele=>title.push(ele.querySelector(".pname").innerText));
[...li].forEach(ele=>price.push(ele.querySelector(".minprice").querySelector("strong").innerText));
[...li].forEach(ele=>user1.push(ele.querySelectorAll(".user")[0].querySelector("img").src));
[...li].forEach(ele=>user2.push(ele.querySelectorAll(".user")[1].querySelector("img").src));
[...li].forEach(ele=>name1.push(ele.querySelectorAll(".user")[0].querySelector("span").innerText));
[...li].forEach(ele=>name2.push(ele.querySelectorAll(".user")[1].querySelector("span").innerText));
[...li].forEach(ele=>code1.push(ele.querySelectorAll(".ratenum")[0].querySelector("strong").innerText));
[...li].forEach(ele=>code2.push(ele.querySelectorAll(".ratenum")[1].querySelector("strong").innerText));
[...li].forEach(ele=>context1.push(ele.querySelectorAll(".comment")[0].querySelector("a").innerText));
[...li].forEach(ele=>context2.push(ele.querySelectorAll(".comment")[1].querySelector("a").innerText));

for(var i=0;i<33;i++){
    var obj={
        img:img[i],
        title:title[i],
        price:price[i],
        user1:user1[i],
        user2:user2[i],
        name1:name1[i],
        name2:name2[i],
        code1:code1[i],
        code2:code2[i],
        context1:context1[i],
        context2:context2[i]
    }
    data.push(JSON.parse(JSON.stringify(obj)))
}