$(()=>{
    $("footer").load("/yemai/template/footer.html");
    new Promise(function(res,ref){
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                shoplist:true
            },
            success:function(data){
                console.log(data);
                var data=JSON.parse(data)
                var ul=document.createElement("ul")
                var str="";
                for(var i=0;i<data.length;i++){
                    str+=`
                        <li>
                            <a>
                                <img src=${data[i].src}>
                            </a>
                            <div>
                                <p>${data[i].title}</p>
                                <p>促销价：</p>
                                <i>${data[i].price}</i>
                                <div>
                                    <i class="dec">-</i>
                                    <span >1</span>
                                    <i class="add">+</i>
                                </div>
                                <em>加入购物车</em>
                            </div>
                        </li>  
                    `
                }
                ul.innerHTML=str;
                $("#myCartGift").append(ul)
                res()
            }
        })
    }).then(function(){
        var listbox=document.querySelector("#myCartGift");
        var ul=listbox.querySelector("ul");
        var li=ul.querySelectorAll("li")
        for(let i=0;i<li.length;i++){
            li[i].index=i;
            li[i].onclick=function(e){
                var e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.nodeName=="I"){
                    if(target.className=="dec"){
                        if(this.querySelector("span").innerHTML*1>0){
                            this.querySelector("span").innerHTML=this.querySelector("span").innerHTML*1-1;
                        }
                        
                    }
                    else{
                        this.querySelector("span").innerHTML=this.querySelector("span").innerHTML*1+1;
                    }
                }
                if(target.nodeName=="EM"){
                    console.log(this.querySelector("p").innerHTML.slice(1));
                    
                    var shopcar=document.querySelector("#myshopcar");
                    console.log(shopcar);
                    
                    var str=`
                        <li>
                            <input class="chose" type="checkbox" checked>
                            ${this.querySelector("a").innerHTML}
                            <i>${this.querySelector("p").innerHTML}</i>
                            <span class="oneprice">${this.querySelector("i").innerHTML}</span>
                            <div class="goodsnumm">${this.querySelectorAll("div")[1].innerHTML}</div>
                            <span class="oneall">￥${this.querySelector("i").innerHTML.slice(1)*this.querySelector("span").innerHTML}</span>
                            <em class="del">删除</em>
                        </li>
                    `
                    shopcar.innerHTML+=str;
                    
                    $(".selectAll")[0].checked=true;
                    $(".selectAll")[1].checked=true;
                    
                     console.log([...$(".goodsnumm span")]);
                     
                    $(".subTotalNum_21-normal").html([...$(".goodsnumm span")].map(ele=>ele.innerText).reduce((a,b)=>a*1+b*1))
                    $(".cartGoodsNum_21-normal").html([...$(".goodsnumm span")].map(ele=>ele.innerText).reduce((a,b)=>a*1+b*1))
                    $("#hollmoney").html([...$(".oneall")].map(ele=>ele.innerText.slice(1)).reduce((a,b)=>a*1+b*1))
                }
            }

            
        }
        $(".selectAll").on("click",function(){
            for(var i=0;i<$(".chose").length;i++){
                $(".chose")[i].checked=this.checked;
            }
            $(".selectAll")[0].checked=this.checked
            $(".selectAll")[1].checked=this.checked

            
            //console.log(this.checked);
        })  

        $("#myshopcar").on("click",".chose",function(){  
            $(".selectAll")[0].checked=true;
            $(".selectAll")[1].checked=true;
            for(var i=0;i<$(".chose").length;i++){
                if(!$(".chose")[i].checked){
                    $(".selectAll")[0].checked=false;
                    $(".selectAll")[1].checked=false;
                }
            }
        })
        $("#myshopcar").on("click",".dec",function(){  
            if($(this).siblings("span").html()>0)
            $(this).siblings("span").html($(this).siblings("span").html()*1-1)
            $(this).parent().siblings(".oneall").html("￥"+$(this).siblings("span").html()*$(this).parent().siblings(".oneprice").html().slice(1));
            $("#hollmoney").html([...$(".oneall")].map(ele=>ele.innerText.slice(1)).reduce((a,b)=>a*1+b*1))
            $(".subTotalNum_21-normal").html([...$(".goodsnumm span")].map(ele=>ele.innerText).reduce((a,b)=>a*1+b*1))
            $(".cartGoodsNum_21-normal").html([...$(".goodsnumm span")].map(ele=>ele.innerText).reduce((a,b)=>a*1+b*1))
        })
        $("#myshopcar").on("click",".add",function(){  
            $(this).siblings("span").html($(this).siblings("span").html()*1+1)
            $(this).parent().siblings(".oneall").html("￥"+$(this).siblings("span").html()*$(this).parent().siblings(".oneprice").html().slice(1));
            $("#hollmoney").html([...$(".oneall")].map(ele=>ele.innerText.slice(1)).reduce((a,b)=>a*1+b*1))
            $(".subTotalNum_21-normal").html([...$(".goodsnumm span")].map(ele=>ele.innerText).reduce((a,b)=>a*1+b*1))
            $(".cartGoodsNum_21-normal").html([...$(".goodsnumm span")].map(ele=>ele.innerText).reduce((a,b)=>a*1+b*1))
        })
        $("#myshopcar").on("click",".del",function(){
            this.parentNode.parentNode.removeChild(this.parentNode)
        })
    })
    
})

