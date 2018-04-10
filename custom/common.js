/* 頁面初始設定 */
$(document).ready(function() {
    categoryDisplay();  
    backToTop();
});


/* 項目顯示控制 */
function categoryDisplay() {
    /*only show All*/
    $('.pwctw-post-list-body>div[post-cate!=All]').hide();
    /*show category when click categories list*/
    $('.pwctw-categories-list-item').click(function() {
        var cate = $(this).attr('cate'); //get category's name

        $('.pwctw-post-list-body>div[post-cate!=' + cate + ']').hide(250);
        $('.pwctw-post-list-body>div[post-cate=' + cate + ']').show(400);
    });
}

/**
 * 回到顶部
 */
function backToTop() {
    //滚页面才显示返回顶部
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#top").fadeIn(500);
        } else {
            $("#top").fadeOut(500);
        }
    });
    //点击回到顶部
    $("#top").click(function() {
        $("body").animate({
            scrollTop: "0"
        }, 500);
    });

    //初始化tip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });
}