var banner=(function(){
    class banner {
        constructor(data,obj) {
            this.data = data;
            this.obj=obj;   
            this.root = null;
            this.oDots = null;
            this.main = null;
            this.index = 0;
            this.timer = null;
        }
        init() {
            this.setBox();
            this.setDot();
            this.cmain();
            this.inset();
            this.move();
            this.addevent();
            // console.log(this.oBox,this.oBtnL,this.oBtnR,this.oDots);

        }
        // 设置大框
        setBox() {
            this.root = document.createElement("div");
            this.root.className = "banner-box";
        }
        // 设置小圆点部分----(div+内容（圆点数与lb图片数相同）+默认显示状态)
        setDot() {
            this.oDots = document.createElement("div");
            this.oDots.className = "banner-dotbox";
            for (let i = 0; i < this.data.length; i++) {
                this.oDots.innerHTML += `<span>${i+1}</span>`
            }
            this.oDots.querySelectorAll("span")[0].className = "banner-active";
        }
        // 设置图片内容-------(div+内容+默认显示状态)
        cmain() {
            this.main = document.createElement("div");
            for (let i = 0; i < this.data.length; i++) {
                this.main.innerHTML += `
            <img src="${this.data[i].src}">
            `
            }
            this.main.querySelectorAll("img")[0].className = "banner-cur";
        }
        // 插入页面并显示
        inset() {
            this.root.appendChild(this.oDots);
            this.root.appendChild(this.main);
            
            this.obj.append(this.root);
        }
        // 自动播放            事件一：（排它+临界点）
        move() {
            // 获取操作对象
            let imgs = this.main.querySelectorAll("img"); /* 从main获取imgs */
            let dots = this.oDots.querySelectorAll("span");
            // 自动播放(根据索引按顺序循环显示图，加样式让其显示)
            this.timer = setInterval(() => {
                //console.log("自动轮播this.index=",this.index);
                /* 排它，清除 */
                this.clear();
                this.index += 1;
                this.index > imgs.length - 1 ? this.index = 0 : this.index;
                imgs[this.index].className = "banner-cur";
                dots[this.index].className = "banner-active";

                // this.index += 1;
                // this.index > imgs.length - 1 ? this.index = 0 : this.index;
            }, 3000)
        }
        clear() {
            // 清除样式（循环）
            let imgs = this.main.querySelectorAll("img");
            let dots = this.oDots.querySelectorAll("span");
            for (let i = 0; i < this.data.length; i++) {
                imgs[i].className = "";
                dots[i].className = "";
            }
        }
        addevent() {
            // 监听事件（鼠标点击左右箭头）
            // 获取图+圆点标签
            let imgs = this.main.querySelectorAll("img");
            let dots = this.oDots.querySelectorAll("span");
            // 右箭头点击事件(正序，索引+，清除所有样式，给当前添加样式)
            // 鼠标移入清除自动播放
            this.root.onmouseover = () => {
                clearInterval(this.timer)
            }
            // 鼠标移除继续继续播放
            this.root.onmouseout = () => {
                this.move();
            }
            // 点击小圆点样式 事件四
            for (let i = 0; i < imgs.length; i++) {
                /* 不能用i，因不能与外部index同步 */
                dots[i].onmouseenter = () => {
                    this.index = i;
                    console.log("点击小圆点this.index=",this.index);
                    this.clear();
                    imgs[this.index].className = "banner-cur";
                    dots[this.index].className = "banner-active";
                }
            }
        }
    }
    return banner
})()