var btn=document.getElementById("btn");
var ul=document.getElementById("ul");
var txt=document.getElementById("txt");
btn.onclick=function(){
    var li=document.createElement("li");

    ul.appendChild(li);
    li.innerHTML=txt.value+"<a href='javascript:;'>删除</a>";
    var a=document.getElementsByTagName("a");
    for(var i=0;i< a.length;i++){
        a[i].onclick=function(){
            ul.removeChild(this.parentNode);
        }
    }

};