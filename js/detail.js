$(()=>{
    new Promise(function(res,ref){
        $("header").load("/yemai/template/header.html",function(){
            res()
            
        })
    }).then(function(){
        $(".head-nav").load("/yemai/template/nav.html");
    })
    var show=1;
    var down=false;
    $(".moredetail li").mouseenter(function(){
        console.log(this.children[0].src);
        document.querySelector("#oimg").src=this.children[0].src.replace("60x98","220x360");
        document.querySelector("#bigger").src=this.children[0].src.replace("60x98","220x360"); 
    })
    
    $("#area-selector").click(function(){
        console.log(down);
        
        if(!down){
            $("#listDown").css("display","block")
            down=!down
        }else{
            $("#listDown").css("display","none")
            down=!down
        }
        
    })




    var mega=document.querySelector(".megaimg");
    var megabox=document.querySelector(".mega");
    var movebox=mega.querySelector(".movebox");
    var img=megabox.querySelector("#bigger");

    
    mega.onmousemove=function(e){
        
        
        var x=e.pageX-mega.offsetLeft;
        var y=e.pageY-mega.offsetTop;
        movebox.style.left=-88+x+"px";
        movebox.style.top=-59+y+"px";
        img.style.display="block";
        img.style.top=-(-59+y)*3+"px";
        img.style.left=-(-88+x)*3+"px";
        if(x<0 || y<0 || x>528 || y>354){
            movebox.style.left=-88*2+"px";
            movebox.style.top=-59*2+"px";
            img.style.display="none";
        }
    }
    mega.onmouseleave=function(){
        img.style.display="none";
        movebox.style.left=-88*2+"px";
        movebox.style.top=-59*2+"px";
    } 
    
})