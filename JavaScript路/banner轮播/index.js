var lis=document.getElementsByTagName("li");
var banner=document.getElementById("banner");
var num=0;
var left=document.getElementById("left");
var right=document.getElementById("right");
var num1=0;
var time=setInterval(
function(){
       for(var i=0;i<lis.length;i++){
           lis[i].style.display = "none";
       }
        num++;
        if (num>2){
            num=0;
        }
        lis[num].style.display="block"
    },3000
);

banner.onmouseover = function(){
    clearInterval(time);
};

banner.onmouseover=function(){
    left.style.display="block";
    right.style.display="block";
};
banner.onmouseout=function(){
    left.style.display="none";
    right.style.display="none";
};
right.onclick=function(){
    for(var i=0;i<lis.length;i++){
        lis[i].style.display = "none";
    }
    num1++;
    if (num1>lis.length-1){
        num1=0;
    }
    lis[num1].style.display = "block";
};
left.onclick=function(){
    for(var i=0;i<lis.length;i++){
        lis[i].style.display = "none";
    }
    num1--;
    if (num1<0){
        num1=lis.length-1;
    }
    lis[num1].style.display = "block";
};