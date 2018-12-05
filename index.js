$(function () {
    // alert("NMSL")
    //1、下滚一定距离后头部图片缩小

    $(window).scroll(function () {
        var $scroll = $(document).scrollTop();
        if ($scroll>100){
            $(".head").css({
                "background":"url(\"标题1.png\")",
                "margin-left":"-200px",
                "height":"60px"
        })
        }else {
            $(".head").css({
                "background":"url(\"标题.png\")",
                "margin-left":"-200px",
                "height":"200px"
            })
        }
        if($scroll>300){
            $(".return").fadeIn(500);
        }else {
            $(".return").fadeOut(500);
        }
    })
    // 2、点击按钮切换轮播图
    $("button").click(function () {
        var index = $(this).index();
        var $show_img = $("#tab > ul > li").eq(index);
        $show_img.addClass("show");
        $show_img.siblings().removeClass("show");
    })
    //3、点击按钮回到顶部
    $(".return").click(function () {
        $("html,body").animate({scrollTop:0},800);
    })
})