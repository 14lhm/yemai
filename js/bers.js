var Ber=(function(){
    class ber {
        constructor(data,title,obj ){
            this.title=title;
           
            this.obj=obj;
            this.data=data;
        }
        init(){
            this.cbox()
            this.chead()
            this.cmain()
            this.insert()
        }
        cbox(){
            this.root=$("<section class='berlist'>")
        }
        chead(){
            this.h=$(`<div class="headbox"><h3 class="title">${this.title}</h3><span class="more">更多>></span></div>`)
        }
        cmain(){
         
            
            var str="";
            console.log(this.data);
            
            for(var i=0,len=this.data.length;i<len;i++){
                
                str+=`
                    <li>
                        <a><img src=${this.data[i].src} /></a>
                        <div class="berdes">
                            <p>${this.data[i].des}</p>
                            <b>${this.data[i].price}</b>
                        </div>
                        <div class="berbt">
                            <span class="fl">售出<strong>${this.data[i].soldnum}</strong></span>
                            <span class="fr">好评<strong>${this.data[i].ratepercent}</strong></span>
                        </div>
                    </li>
                `
                
            }
            
            
            this.m=$(`<div><ul>${str}</ul></div>`)

        }
        insert(){
            if(this.title!=""){
                $(this.root).append($(this.h))
            }
            
            $(this.root).append($(this.m))
            $(this.obj).append($(this.root))
        }
    }
    return ber
})()