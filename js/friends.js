$(()=>{
    (function(){
        var title=document.createElement("div");
        
        title.innerHTML=`
            <h3></h3>
            <div class="fbtn">
                <i>&lt</i>
                <span>
                    <em>1</em>/11
                </span>
                <i>&gt</i>
            </div>
        `
        
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                friend:true
            },
            success:function(data){
                var data=JSON.parse(data)
                var ul=document.createElement("ul");
                var str="";
                for(var i=0;i<33;i++){
                    str+=`
                        <li>
                            <a>
                                <img src=${data[i].img} />
                            </a>
                            <div>
                                <h6>${data[i].title}</h6>
                                <strong>￥${data[i].price}</strong>
                                <div class="comment">
                                    <a class="user">
                                        <img src=${data[i].user1}>
                                        <span>${data[i].name1}</span>
                                    </a>
                                    <p>
                                        <span><i>评分</i><em>${data[i].code1}</em></span>
                                        ${data[i].context1}
                                    </p>
                                </div>
                                <div class="comment">
                                    <a class="user">
                                        <img src=${data[i].user2}>
                                        <span>${data[i].name2}</span>
                                    </a>
                                    <p>
                                        <span><i></i>评分<em>${data[i].code2}</em></span>
                                        ${data[i].context2}
                                    </p>
                                </div>
                            </div>
                        </li>
                    `
                }
                ul.innerHTML=str;
                $(".friendlist").append($(ul))
                var oi=title.querySelectorAll('i')
                var num=1;
                oi[0].onclick=function(){
                    if(num>0)num-=1;
                    $(".friendlist ul").css({left:-950*num})
                    
                }
                oi[1].onclick=function(){
                    if(num<11)num+=1;
                    $(".friendlist ul").css({left:-950*num})
                    $(".fbtn em").text(num)
                    
                }
                
                
            }
        })
        
        $(".friend").append($(title))
    })()



    
})