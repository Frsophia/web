$(document).ready(function () {
    //nav 下拉菜单：
    //定义 $parent 为每个列表的子元素li
    var $parent = $("#navName a").parent();

    //当鼠标悬停时，调用显示函数
    $("#navName a").hover(function () {
        return show(this);
    })

    //当鼠标离开时，调用隐藏函数
    $parent.mouseleave(function () {
        return hide(this);
    })

})
