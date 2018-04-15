/**
 * Created by Administrator on 2018/2/6 0006.
 */

//封装className函数
function getcheck(classN){
    var tagn = document.getElementsByTagName("*");
    var arr = [];
    for (var i = 0; i < tagn.length; i++){
        if (tagn[i].className == classN||tagn[i].className.indexOf(" "+classN) != -1 || tagn[i].className.indexOf(classN+" ") != -1){
            arr.push(tagn[i]);
        }
    }
    return arr;
}



//全选效果实现
var check=getcheck("check");

/*alert(check.length);*/
for (var i=0;i<check.length;i++) {
    check[i].onclick=function() {
        if(this.className=="check-all check") {
            for(var i=0;i<check.length;i++) {
                check[i].checked = this.checked;
            }
        }
        getTotal()
    }
}


//购物车计费和数量实现  我用的是我封装的className来实现该功能
var selectedTotal = document.getElementById("selectedTotal");
var priceTotal = document.getElementById("priceTotal");
var count_input = getcheck("count-input");
var subtotal = getcheck("subtotal");
var check_one = getcheck("check-one");
//alert(count_input[0].value);
function getTotal(){
    var select=0;
    var price=0;
    for(var i=0;i<count_input.length;i++){
        if (check_one[i].checked){
            select+=parseInt(count_input[i].value);
            price+=parseFloat(subtotal[i].innerHTML);
        }
    }
    selectedTotal.innerHTML = select;
    priceTotal.innerHTML=price.toFixed(2);
}
/*function getTotal(){
    //结算函数功能
    var select = 0;
    var price =0;
    for(var i=0;i<tr.length;i++){
        //如果是复选框选中的状态，才能把值放入进去
        if(tr[i].getElementsByTagName("input")[0].checked){

            select += parseInt(tr[i].getElementsByTagName("input")[1].value);
            price += parseFloat(tr[i].cells[4].innerHTML);

        }
    }

    selectedTotal.innerHTML = select;
    priceTotal.innerHTML = price.toFixed(2);
教程实现方法用tr来判断获取 单选框是否选中
}*/



//单击foot出现已选商品层,class命名带空格证明有两个类或多个类！！！
var foot = document.getElementById("foot");
var selected = document.getElementById("selected");
selected.onclick = function(){
    if(selectedTotal.innerHTML != 0){
        foot.className = "foot show";
    }else{
        foot.className = "foot";
    }

};




//取消商品选择
var selectedViewList=document.getElementById("selectedViewList");
selectedViewList.onclick=function(e){
    //用了事件委托的原理
    var e=window.event||e;
    var tar= e.target||e.srcElement;
    if(tar.nodeName=="SPAN"){

    }
};