var arr=["米饭","烂粉","牛肉汤","猪肉汤","煮面","煮粉","烫肉"];
var box=document.getElementById("box")
var star=document.getElementById("star");
var i=0;
var stop=document.getElementById("stop");
var time=null;
star.onclick= function(){
    time=setInterval(function(){
        box.innerHTML = arr[i];
        i++;
        if (i>arr.length-1){
            i=0;
        }
        box.innerHTML=arr[i];
    },50)
};
stop.onclick=function(){
    clearInterval(time);
};