$(()=>{

    new Promise(function(res,rej){
        $("header").load("/yemai/template/header.html",function(){
            res()
        });
    }).then(function () {
        $(".head-nav").load("/yemai/template/nav.html");
    }).then(function(){
        $("footer").load("/yemai/template/footer.html");
    })
    .then(function(){
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                goodsrank:true
            },
            success:function(data){
                var r=new BersRank(JSON.parse(data).slice(20,27),3,document.querySelector(".channel-topboard"))
                r.init()
                $(".channel-topboard h1").html("一周销量排行")
            }
        })
    })

    function turnpage(obj){
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:obj,
            success:function(data){
                var data=JSON.parse(data);
                var obj=document.querySelector(".goodslist")
                var str="";
                for(let i=0;i<30;i++){
                    str+=`
                    <li>
                        <a>
                            <img src=${data[i].src} />
                            
                            ${JSON.parse(data[i].isno)?`<p class="promo-icon">`:""}
                        </a>        
                        <div class="des">
                            <p class="cn">${data[i].des}</p>
                            <p class="en">${data[i].en}</p>
                            <p class="promp">${data[i].promo}</p>
                            <i class="price">￥<strong>${data[i].price}</strong></i>
                            ${!JSON.parse(data[i].isno)?`<span class="addtocar">加入购物车</span>`:`<span class="sellall"><em>为您推荐</em><em>到货通知</em></span>`}
                        </div>   
                        <div class="sum">
                            <p>
                                <span style="color:red">${data[i].good}</span>
                                好评度
                            </p>
                            <p>
                                <span style="color: #3388bb">${data[i].comment}</span>
                                评论
                            </p>
                            <p>
                                <span style="color: #b57c5b;">${data[i].sell}</span>
                                售出
                            </p>
                        </div>     
                    </li> 
                    `
                }
                obj.innerHTML=str;
                
            }
        })
    }
    turnpage({
        list:true,
        page:1
    })

    

    $(".selnum").click(function(){
        $(this).addClass("onselect").siblings().removeClass("onselect")
        turnpage({
            list:true,
            page:$(this).index()
        })
    })

    for(var i=0,len=$(".type-mod-name").length;i<len;i++){
        $(".type-mod-name")[i].onclick=function(e){
            var e=e||window.event;
            var target=e.target||e.srcElement;
            if(target.nodeName=="EM"){
                $(this).siblings("ul").toggleClass("hidden");
                
            }
        }
    }
    
})