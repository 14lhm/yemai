var Slideshow=(function(){
    class slide {
        constructor(data,obj){
            this.data=data;
            this.obj=obj;
            this.root=null;
        }
        init(){
            
            this.main()
            console.log(this.root);
            this.obj.appendChild(this.root)
        }
        main(){
            this.root=document.createElement("ul");
            var str="";
            for(var i=0,len=this.data.length;i<len;i++){
                str+=`
                    <li>
                        <a>
                            <img src=${this.data[i].src} />
                        </a>
                    </li>
                `
            }
            this.root.innerHTML=str;
        }
    }
    return slide
})()


