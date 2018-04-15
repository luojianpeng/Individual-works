var img = document.getElementById("img");

document.onkeydown = function(e){

    var e = window.event || e;

    switch(e.keyCode){

        case 37:
            img.style.left = img.offsetLeft-10+"px";
            break;

        case 38:
            img.style.top = img.offsetTop-10+"px";
            break;

        case 39:
            img.style.left = img.offsetLeft+10+"px";
            break;
        case 40:
            img.style.top = img.offsetTop+10+"px";
            break;
        case 32:
            game(img.offsetTop,img.offsetLeft+img.offsetWidth/2);
            break;
    }

}

function game(top,left){

    for(var i=0;i<5;i++){
        var pos = document.getElementById("pos"+i);
        if(pos.style.display == "none"){
            pos.style.display = "block";
            pos.style.left = left+"px";
            pos.style.top = top+"px";
            break;
        }
    }
}
setInterval(function(){
    for(var i=0;i<5;i++){
        var pos = document.getElementById("pos"+i);
        pos.style.top = pos.offsetTop-10+"px";
        if(pos.offsetTop<-7){
            pos.style.display = "none";
        }
    }
},50);