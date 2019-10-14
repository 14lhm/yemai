
var src=[];
var des=[];
var en=[];
var promo=[];
var price=[];
var good=[];
var comment=[];
var sell=[];
var isno=[];
var l=document.querySelector(".piclist");
var li=l.querySelectorAll("li");
[...li].forEach(ele=>src.push(ele.querySelector("img").src));
[...li].forEach(ele=>des.push(ele.querySelector(".cn").innerText));
[...li].forEach(ele=>en.push(ele.querySelector(".en").innerText));
[...li].forEach(ele=>promo.push(ele.querySelector(".promo").innerText));
[...li].forEach(ele=>price.push(ele.querySelector(".price").querySelector("strong").innerText));
[...li].forEach(ele=>good.push(ele.querySelector(".ratecount").querySelector("strong").innerText));
[...li].forEach(ele=>comment.push(ele.querySelector(".commentcount").querySelector("strong").innerText));
[...li].forEach(ele=>sell.push(ele.querySelector(".soldnum").querySelector("strong").innerText));
[...li].forEach(ele=>isno.push(ele.querySelector(".promo-icon")?"true":"false"));
var data=[];

for(var i=0;i<30;i++){
    var obj={
        src:src[i],
        des:des[i],
        en:en[i],
        promo:promo[i],
        price:price[i],
        good:good[i],
        comment:comment[i],
        sell:sell[i],
        isno:isno[i]
    }
    data.push(JSON.parse(JSON.stringify(obj)))
}
