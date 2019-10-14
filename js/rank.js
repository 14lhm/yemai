var BersRank=(function(){
    class rank {
        constructor(data,shownum,obj){
            this.data=data;
            
            this.obj=obj;

            this.shownum=shownum;
            this.root=null;
        }
        init(){
            this.len=this.data.length;
            this.cbox()
            this.main()
            this.insert()
        }
        cbox(){
            this.root=document.createElement("section")
        }
        main(){
            var ul=document.createElement("ul");
            var str="<h1></h1>";
            for(var i=0;i<this.len;i++){
                str+=`
                    <li>
                        <em>${this.data[i].num}</em>
                        <div class="rankleft">
     
                                <img src=${this.data[i].src} />
                            
                        </div>
                        <div class="rankright">
                            <a>
                                <p>${this.data[i].des}</p>
                            </a>
                            <span>售出 ${this.data[i].sell}</span>
                            <b>￥${this.data[i].price}</b>
                        <div>
                    </li>
                `
            }
            ul.innerHTML=str;
            var li=ul.querySelectorAll("li");
            for(let i=0;i<li.length;i++){
                if(i<this.shownum){
                    li[i].classList.add("ranklihover")
                    li[i].getElementsByTagName("a")[0].classList.add("rankahover")
                    li[i].getElementsByClassName("rankleft")[0].classList.add("ranklefthover")
                    li[i].getElementsByTagName("em")[0].classList.add("rankemhover")
                }
                if(i>this.shownum-2){
                    var vthis=this;
                    li[i].onmouseenter=function(){
                        for(var j=vthis.shownum-1;j<li.length;j++){
                            console.log(1112222);
                            
                            li[j].classList.remove("ranklihover")
                            li[j].getElementsByTagName("a")[0].classList.remove("rankahover")
                            li[j].getElementsByClassName("rankleft")[0].classList.remove("ranklefthover")
                            li[j].getElementsByTagName("em")[0].classList.remove("rankemhover")
                        }
                        this.classList.add("ranklihover")
                        this.getElementsByTagName("a")[0].classList.add("rankahover")
                        this.getElementsByClassName("rankleft")[0].classList.add("ranklefthover")
                        this.getElementsByTagName("em")[0].classList.add("rankemhover")
                    }
                    
                }
            }
            this.root.appendChild(ul)
        }
        insert(){
            this.obj.appendChild(this.root)
        }
        
        
    }
    return rank
})()