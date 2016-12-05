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
    size(750, "x")

    var flag = true;
    $(".mask").hide()
    touch.on($('#news-h nav .close'), "tap", function () {
        $('#news-h nav .close').toggleClass("active");

        if ($('#news-h nav .close').attr("class") == "close active") {
            $('#news-h nav .close').css("opacity", "1")
            $(".nav-left").addClass("active");
            $(".mask").show().addClass("show");
            $("body").css({
                overflow: "hidden"
            })
            flag = false;
            clearInterval(t);
        } else {
            $('#news-h nav .close').css("opacity", "0")
            $("body").css({
                overflow: "scroll"
            });
            $(".nav-left").removeClass("active");
            $(".mask").removeClass("show");

        }
    });

    function close(){
        if (flag) {
            return;
        }
        flag = true;
        $("body").css({
            overflow: "scroll"
        });
        $('#news-h nav .close').css({"opacity": "0", transitionDelay: "1s", "-webkit-transition-delay": "1s"});
        $('#news-h nav .close').removeClass("active");
        $(".nav-left").removeClass("active");
        $(".mask").removeClass("show");
    }
    touch.on($('.mask'), "touchstart", function () {
       close();
    });
    touch.on($(".nav-left"), "swipeleft", function () {
        close();
l
    })


    if ($('.mask')[0]) {
        $('.mask')[0].addEventListener("webkitTransitionEnd", function () {
            if ($('#news-h nav .close').attr("class") == "close active") {

            } else {
                $(".mask").hide()
            }
        })
    } else {
    }



    $(".nav-items li").click(function () {
        $(".nav-items li").removeClass("active");
        $(this).addClass("active");
    })



    var t = setTimeout(function () {
        $("#news-h .close").css("opacity", "0");
        clearInterval(t);
    }, 3000)



    $(".fixed-close").click(function () {
        $(this).toggleClass("active")
    })



    //留言

    $(".keyword>div").click(function () {
        $(".keyword>div").removeClass("active");
        $(this).addClass("active");
        location.href="message.html"
    })
})