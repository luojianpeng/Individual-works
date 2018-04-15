var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    str1="",
    username=document.getElementById("username"),
    pwd=document.getElementById("pwd"),
    yzm=document.getElementById("yzm"),
    btn=document.getElementById("btn"),
    span1=document.getElementById("span1");
var str2=function(){
    for(var i=0;i<4;i++){
        str1+=str[parseInt(str.length*Math.random())];
    }
    return str1
};
span1.innerHTML=str2();

btn.onclick=function(){
    if(username.value=="admin"){
        if (pwd.value=="admin"){
            if(yzm.value==span1.innerHTML){
                location.href="login.html";
            }else {
                alert("验证码不正确");
                /*alert(span1.innerHTML);*/
            }
        }else{
            alert("密码必须为admin");
        }
    }else {
        alert("用户名必须为admin");
    }
};

