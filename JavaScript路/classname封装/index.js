

function fn(cname){
    var dom=document.getElementsByTagName("*");
    var arr=[];
    for(var i=0;i<dom.length;i++){

        if(dom[i].className==cname || dom[i].className.indexOf(" "+cname) != -1 || dom[i].className.indexOf(cname+" ") != -1 || dom[i].className.indexOf(" "+cname+" ") != -1){
            arr.push(dom[i]);
            // alert(dom[i]);
        }
    }
    return arr;
}
for(var i=0;i<fn("lis").length;i++){
    fn("lis")[i].style.background = "red";
}

