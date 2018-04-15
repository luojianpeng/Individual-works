var min = document.getElementById("min"),
    max = document.getElementById("max"),
    b = document.getElementsByTagName("b")[0],
    imgs = document.getElementById("imgs");

min.onmousemove = function(e){

    b.style.display = "block";
    max.style.display = "block";
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var x = e.clientX+scrollLeft-min.offsetLeft- b.offsetWidth/2;
    var y = e.clientY+scrollTop-min.offsetTop - b.offsetHeight/2;

    if(x<0){
        x=0;
    }else if(x>min.offsetWidth-b.offsetWidth){
        x=min.offsetWidth-b.offsetWidth;
    }

    if(y<0){
        y=0;
    }else if(y>min.offsetHeight-b.offsetHeight){
        y=min.offsetHeight-b.offsetHeight;
    }

    b.style.left =x+"px";
    b.style.top =y+"px";


    imgs.style.left = -2*x+"px";
    imgs.style.top = -2*y+"px";

}

min.onmouseout = function(){

    b.style.display = "none";
    max.style.display = "none";
}