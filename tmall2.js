var right=document.getElementById("right"),
    oLis=utils.children(right,"li");
for(var i= 0;i<oLis.length;i++){
(function(i){
    var curLi=oLis[i];
    var hideDiv=utils.children(curLi,"div")[0];
    curLi.onmouseover=function(){
        if (hideDiv){
            utils.addClass(curLi,"bg");
            utils.css(hideDiv,{
                display:"block"
            });
        }
    }
})(i);
    (function(i){
            var curLi=oLis[i];
            var hideDiv=utils.children(curLi,"div")[0];
            curLi.onmouseout=function(){
                //var hideDiv=utils.children(curLi,"div")[0];
            if (hideDiv){
                utils.removeClass(curLi,"bg");
                utils.css(hideDiv,{
                    display:"none"
                });
            }
        }
    })(i);
}


var bannerLeft=document.getElementById("bannerLeft");
var bannerLi=utils.children(bannerLeft,"li");
//console.log(bannerLi);
for(var i=0;i<bannerLi.length;i++){
    (function (i){
        var curBanLi=bannerLi[i];
        var bannerDiv=utils.children(curBanLi,"div")[0];

        curBanLi.onmouseover=function(){
            utils.addClass(curBanLi,"background");
            utils.css(bannerDiv,{
                display:"block"
            });
            bannerDiv.style.top=-31.2*i+"px";
        }

        curBanLi.onmouseout=function(){
            utils.removeClass(curBanLi,"background");
            utils.css(bannerDiv,{
                display:"none"
            });
        }
    })(i);
}



//第二个导航部分：鼠标划过出现天猫头
var navRight=document.getElementById("navRight");
var oAs=navRight.getElementsByTagName("a");
for (var i=0;i<oAs.length;i++){
    (function (i){
        var cur=oAs[i];
        var em=utils.children(cur,"em")[0];
        //console.log(em);
        cur.onmouseover=function(){
            zhufengAnimate(em,{
                display:"block"
            },100,4);
        }

        cur.onmouseout=function(){
            zhufengAnimate(em,{
                display:"none"
            },100,4);
        }
    })(i);
}








var banBg=document.getElementById("banBg");
var banBox=utils.children(banBg,"div");
var banCir=document.getElementById("banCir");
var circle=banCir.getElementsByTagName("li");
var banner=document.getElementById("banner");

var interval = 2000, autoTimer = null, step = 0;
autoTimer = window.setInterval(autoMove, interval);
function autoMove(){
    if (step===(banBox.length-1)){
        step=-1;
    }
    step++;
    setBanner();
}


function setBanner() {
    for (var i = 0; i < banBox.length; i++) {
        //console.log(banBox.length);
        var curDiv = banBox[i];
        if (i === step) {
            //console.log(i,step);
            utils.css(curDiv, "zIndex", 1);
            zhufengAnimate(curDiv, {opacity: 1}, 200, function () {
                var curDivSib = utils.siblings(this);
                for (var k = 0, len = curDivSib.length; k < len; k++) {
                    utils.css(curDivSib[k], "opacity", 0);
                }
            });
            continue;
        }
        utils.css(curDiv, "zIndex", 0);
    };

    for (i = 0; i < circle.length; i++) {
        var curLi = circle[i];
        i === step ? utils.addClass(curLi, "bg") : utils.removeClass(curLi, "bg");
        //console.log(i,step);
    }
};




banner.onmouseover = function () {
    window.clearInterval(autoTimer);
    console.log("ok");
};
banner.onmouseout = function () {
    console.log("ok");
    autoTimer = window.setInterval(autoMove, interval);
};

//6、实现点击焦点切换
~function () {
    for (var i = 0, len = circle.length; i < len; i++) {
        var curLi = circle[i];
        curLi.index = i;
        curLi.onclick = function () {
            step = this.index;
            setBanner();
        }
    }
}();






//…………………………………………………………………………………………以下是热门品牌
var hotBrandsMid=document.getElementById("hotBrandsMid");
var hotBrandsLi=utils.children(hotBrandsMid,"li");



for (var i=0;i<hotBrandsLi.length;i++){
    (function (i){
        var hotLi=hotBrandsLi[i];
        var hotBrandsMask=utils.lastChild(hotLi);

        hotLi.onmouseover=function(){
            hotBrandsMask.style.display="block";
        }
        hotLi.onmouseout=function() {
            hotBrandsMask.style.display = "none";
        }
    })(i);
}




//………………………………………………………………………………以下是潮流前线、手机酷玩666



//………………………………………………………………………………以下是品牌旗舰店
var storeCon=document.getElementById("storeCon");
var storeConDiv=utils.children(storeCon,"div");
for(var i=0;i<storeConDiv.length;i++){
    (function (i){
        var curDiv=storeConDiv[i];
        curDiv.onmouseover=function(){
            this.style.border="1px solid red";
        }
        curDiv.onmouseout=function(){
            this.style.border="1px solid transparent";
        }
    })(i);
}





//“美丽人生部分”
//var beauty=document.getElementById("beauty");
//
//var jsonData=null;
//
////1.获取和解析数据
//(function(){
//    var xhr=new XMLHttpRequest;
//    xhr.open("get","json/beauty.txt",false);
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
//            var val = xhr.responseText;
//            jsonData = utils.formatJSON(val);
//        }
//    };
//    xhr.send(null);
//})();
//
////2.绑定数据
//(function(){
//    var str='';
//    //console.log(jsonData);
//    if (jsonData){
//
//        str+='<div class="top" id="top">';
//        str+='<i></i>';
//        str+='<p>'+jsonData[0]["top"]+'</p>';
//        str+='</div>';
//    }
//    beauty.innerHTML=str;
//
//    var str='';
//    var hot=document.getElementById("hot");
//    if (jsonData){
//        var hotLinkAry=jsonData[1].hot;
//        for (var i= 0;i<hotLinkAry.length;i++){
//            var curLink=hotLinkAry[i];
//            str+='<a href="javascript:;" class="hotLink">'+curLink+'</a>';
//        }
//    }
//    hot.innerHTML=str;
//
//
//    var str='';
//    var picList=document.getElementById("picList");
//    if (jsonData){
//        var leftPartary=jsonData[1].picList[0];
//        str+='<a href="javascript:;" class="leftPart" id="leftPart">' ;
//            str+='<img src="" trueImg="'+leftPartary["img"]+'"/>';
//            str+='<div class="leftBottom">';
//            str+='<div class="title">'+leftPartary["leftBottom"][0]+'</div>';
//            str+='<div class="desc">'+leftPartary["leftBottom"][1]+'</div>';
//            str+='</div>';
//        str+='</a>';
//
//
//        var middlePartAry=jsonData[1].picList[1];
//        for (var i=0;i<middlePartAry.length;i++){
//            var curMiddle=middlePartAry[i];
//            str+='<div class="middlePart">';
//                str+='<a href="javasccript:;" class="aMiddle">';
//                    str+='<div class="title">'+curMiddle[0]+'</div>';
//                    str+='<div class="desc">'+curMiddle[1]+'</div>';
//                    str+='<img src="" trueImg="'+curMiddle[2]+'" alt=""/>';
//                str+='</a>';
//            str+='</div>';
//
//        }
//
//
//
//        var rightPartAry=jsonData[1].picList[2];
//        for (var i=0;i<rightPartAry.length;i++){
//            var curRight=rightPartAry[i];
//            str+='<div class="rightPart">';
//                str+='<a href="javasccript:;" class="aRight">';
//                    str+='<div class="title">'+curRight[0]+'</div>';
//                    str+='<div class="desc">'+curRight[1]+'</div>';
//                    str+='<img src="" trueImg="'+curRight[2]+'" alt=""/>';
//                str+='</a>';
//            str+='</div>';
//        }
//
//
//    }
//    picList.innerHTML=str;
//
//
//
//
//
//})();






