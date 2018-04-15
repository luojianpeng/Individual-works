

$(function(){
    $("#img-box img:eq(0)").first("img").mousemove(function(){

        $("#QID").stop("true","false").show(500,function(){

        });
        $("#WID").hide(500);


    });
    $("body").click(function(){

        $("#QID").hide(500);
    });


    $("#img-box img:eq(1)").first("img").mousemove(function(){

        $("#WID").stop("true","false").show(500,function(){

        });
        $("#QID").hide(500);
    });
    $("#banner-btn").click(function(){

        $("#WID").hide(500);
    });






});