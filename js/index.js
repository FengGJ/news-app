function size(originSize, type) {
    type = type || "x";
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    var scale = 0;
    if (type == "x") {
        scale = width / originSize * 100;
    }
    else if (type == "y") {
        scale = height / originSize * 100;
    }
    document.getElementsByTagName("html")[0].style.fontSize = scale + "px";
}
$(function () {
    size(1334, "y")

    var flag=true;
    $(".mask").hide()
    touch.on($('nav .close'),"tap",function(){
        $('nav .close').toggleClass("active");

        if($('nav .close').attr("class")=="close active"){
            $('nav .close').css("opacity","1")
            $(".nav-left").addClass("active");
            $(".mask").show().addClass("show");
            $("body").css({
                overflow:"hidden"
            })
            flag=false;
            clearInterval(t);
        }else{
            $('nav .close').css("opacity","0")
            $("body").css({
                overflow:"scroll"
            });
            $(".nav-left").removeClass("active");
            $(".mask").removeClass("show");

        }
    })
    touch.on($('.mask'),"touchstart",function(){
        if(flag){
            return;
        }
        flag=true;
        $("body").css({
            overflow:"scroll"
        });
        $('nav .close').css({"opacity":"0",transitionDelay:"1s","-webkit-transition-delay":"1s"});
        $('nav .close').removeClass("active");
            $(".nav-left").removeClass("active");
            $(".mask").removeClass("show");
    })
    $('.mask')[0].addEventListener("webkitTransitionEnd",function(){
        if($('nav .close').attr("class")=="close active"){

        }else{
            $(".mask").hide()
        }
    })
    $(".nav-items li").click(function () {
        $(".nav-items li").removeClass("active");
        $(this).addClass("active");
    })
    touch.on($(".nav-items li"),"tap",function(){

    })
    var t=setTimeout(function(){
        $("#news-h .close").css("opacity","0");
        clearInterval(t);
    },3000)

})