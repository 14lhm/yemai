$(()=>{
    
    (function(){
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                title:true
            },
            success:function(data){
                
                
                var data=JSON.parse(data);
                console.log(data);
                var str=""
                for(var i=0,len=data.length;i<len;i++){
                    str+=`
                        <li>
                            <h2>${data[i].title}</h2>
                            <p>${data[i].des}</p>
                        </li>
                    `
                }
                $(".hottitle ul").html(str)
            }
        })
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                hot:true
            },
            success:function(data){
                var data=JSON.parse(data);
                var content=document.querySelector(".conbox");
                for(var i=0;i<5;i++){
                    var ul=document.createElement("ul")
                    var str="";
                    for(var j=0;j<5;j++){
                        console.log(data[i*5+j]);
                        
                        str+=`
                            <li>
                                <a><img src=${data[i*5+j].src} /></a>
                                <div>
                                    <p>${data[i*5+j].des}</p>
                                    <span>抢购价<b>￥${data[i*5+j].price}</b></span>
                                </div>
                                ${data[i*5+j].sell?`<i> 售出  ${data[i*5+j].sell}</i>`:""}
                            </li>
                        `
                        ul.innerHTML=str;
                    }
                    content.appendChild(ul)
                }
                $(".hottitle ul li").mouseenter(function(){
                    $(this).addClass("hotactive").siblings().removeClass("hotactive")
                    console.log(-$(this).index()*360);
                    
                    $(".conbox").css({top:-$(this).index()*360})
                })
            }
        })
    })()
})
