var img=document.getElementById("img");
var num=-1;
function fn(value){
    num++;
    if (num>4){
        num=0;
    }
    return value
}
document.onkeydown=function(e){
    var e= window.event||e;
    switch (e.keyCode){
        case 37:
            img.style.left=img.offsetLeft-10+"px";
            //alert("左");
            img.src="img/"+fn("left")+"-"+num+".png";
            break;
        case 38:
            //alert("上");
            img.style.top=img.offsetTop-10+"px";
            img.src="img/"+fn("up")+"-"+num+".png";
            break;
        case 39:
            //alert("右");
            img.style.left=img.offsetLeft+10+"px";
            img.src="img/"+fn("right")+"-"+num+".png";
            break;
        case 40:
            //alert("下");
            img.style.top=img.offsetTop+10+"px";
            img.src="img/"+fn("down")+"-"+num+".png";
            break;
    }
};