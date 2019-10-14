$(()=>{
    
    $(".notice-lists h3 span").mouseenter(function(){
        $(this).addClass("on").siblings().removeClass("on")
        $("#notices ul").eq($(this).index()).show().siblings("ul").hide()
    })


    $.ajax({
        type:"post",
        url:"/yemai/server/getdata.php",
        data:{
            like:true
        },
        success:function(data){
            var data=JSON.parse(data);
            var ul=document.createElement("ul")
            var str="";
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <a>
                            <img src=${data[i].src}>
                        </a>
                        <div>
                            <h6>${data[i].title}</h6>
                            <p>${data[i].ename}</p>
                            <p>${data[i].place}</p>
                            <p>${data[i].type}</p>
                            <p>${data[i].good}</p>
                            <span>${data[i].price}</span>
                        </div>
                    </li>
                `
            }
            ul.innerHTML=str;
            $(".guessPageNum").append(ul)
        }
    })


    $.ajax({
        type:"post",
        url:"/yemai/server/getdata.php",
        data:{
            imglang:true
        },
        success:function(data){
            
            var obj=document.querySelector(".imglang");
            var langhead=obj.querySelector(".langhead");
            var langlist=obj.querySelector(".langlist");
            var str1="";
            var str2="";
            var len=-1;
            var data=JSON.parse(data)
            
            str1=c();
            for(var i=6;i<11;i++){
                str2+=`
                    <li>
                        <a>
                            <img src=${data[i].src}>
                        </a>
                    </li>
                    
                `
            }
            langhead.innerHTML=str1;
            console.log();
            
            $(".langlist ul").html(str2);
            var img=langhead.querySelectorAll("img");
            for(let i=0;i<img.length;i++){
                img[i].index=i;
                img[i].onmouseenter=function(){
                    console.log(this.index);
                    for(let j=1;j<img.length;j++){
                        img[j].parentNode.style.marginLeft="150px";
                    }
                    img[this.index+1]?img[this.index+1].parentNode.style.marginLeft="450px":"";
                }
            }
            function c(){
                len+=1;
                return `
                    <div>
                        <img src=${data[len].src} />
                        ${len<5?c():""}
                    </div>
                `
            }
           
        }
    })



    new Promise(function(res,rej){
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                logobanner:true
            },
            success:function(data){
                var obj=document.querySelector(".banner");
                var a = new banner(JSON.parse(data),obj);
                a.init();
                res()
            }
        })
        res()
    }).then(function () {  
        $("header").load("/yemai/template/header.html");
    })
    .then(function () {
        $(".head-nav").load("/yemai/template/nav.html");
    })
    .then(function(){
        $("footer").load("/yemai/template/footer.html");
    })
    .then(function(){
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                goodslist:true
            },
            success:function(data){
                var ber1=new Ber(JSON.parse(data).slice(0,5),"性价比之选",document.querySelectorAll(".ber")[0]);
                ber1.init()
                var ber2=new Ber(JSON.parse(data).slice(5,10),"新品上市",document.querySelectorAll(".ber")[1]);
                ber2.init()
                var ber3=new Ber(JSON.parse(data).slice(15,20),"",document.querySelectorAll(".ber")[2]);
                ber3.init()
                var ber4=new Ber(JSON.parse(data).slice(20,25),"爆款精选",document.querySelectorAll(".ber")[3]);
                ber4.init()
                var ber5=new Ber(JSON.parse(data).slice(25,30),"大牌直降",document.querySelectorAll(".ber")[4]);
                ber5.init()
                var ber6=new Ber(JSON.parse(data).slice(30,35),"",document.querySelectorAll(".ber")[5]);
                ber6.init()
            }
        })
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                turnimg:true
            },
            success:function(data){
                var b = new banner(JSON.parse(data).slice(0,5),document.querySelectorAll(".banner")[1]);
                b.init();
                var b1 = new banner(JSON.parse(data).slice(5,10),document.querySelectorAll(".banner")[2]);
                b1.init();
                var b2 = new banner(JSON.parse(data).slice(10,15),document.querySelectorAll(".banner")[3]);
                b2.init();
                var b3 = new banner(JSON.parse(data).slice(15,17),document.querySelectorAll(".banner")[4]);
                b3.init();
            }
        })
        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                imglist:true
            },
            success:function(data){
                var ber=new Slideshow(JSON.parse(data).slice(0,10),document.querySelectorAll(".leftimg")[0]);
                ber.init()
                var ber1=new Slideshow(JSON.parse(data).slice(10,20),document.querySelectorAll(".leftimg")[1]);
                ber1.init()
                var ber2=new Slideshow(JSON.parse(data).slice(30,40),document.querySelectorAll(".leftimg")[2]);
                ber2.init()
                var ber3=new Slideshow(JSON.parse(data).slice(40,50),document.querySelectorAll(".leftimg")[3]);
                ber3.init()
            }
        })

        $.ajax({
            type:"post",
            url:"/yemai/server/getdata.php",
            data:{
                goodsrank:true
            },
            success:function(data){
                var r=new BersRank(JSON.parse(data).slice(0,10),3,document.querySelectorAll(".rank")[0])
                r.init()
                var r1=new BersRank(JSON.parse(data).slice(10,20),1,document.querySelectorAll(".rank")[1])
                r1.init()
                var r2=new BersRank(JSON.parse(data).slice(20,27),3,document.querySelectorAll(".rank")[2])
                r2.init()
                var r3=new BersRank(JSON.parse(data).slice(27,37),1,document.querySelectorAll(".rank")[3])
                r3.init()
                
            }
        })
    })


 
    
    
})





