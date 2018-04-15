;(function ($) {

    $.fn.tab = function (options) {

        var data = {
            tabEvent:"click",
            bgColor:"",
            bgId:'bg',
            bid:'.tab1'
        };

        var settings = $.extend({},data,options)

        $(this).find('li').bind(settings.tabEvent,function () {

            $(this).css("backgroundColor",settings.bgColor).siblings().css("backgroundColor","");
            $(this).addClass(settings.bgId).siblings().removeClass(settings.bgId);

            var idx = $(this).index();
            /*console.log(idx);
            console.log($(settings.bid).find("div p").length);*/
            $(settings.bid).find("p").eq(idx).show().siblings().hide()
        })

    }
  }
)(jQuery);