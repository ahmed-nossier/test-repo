let colorItems = $(".color-item")

colorItems.click(function(){
    let myColor = $(this).css("backgroundColor");
    $("  h2 , h3,h4").css("color" , myColor);

})

colorItems.eq(0).css("background" , "#09c");
colorItems.eq(1).css("background" , "#ccc");
colorItems.eq(2).css("background" , "#18a");
colorItems.eq(3).css("background" , "#2fc");
colorItems.eq(4).css("background" , "#ff206e");


$("#sideBarToggle").click(function(){
    let colorBoxWidth = $(".color-box").outerWidth(true);

    if( $("#sideBar").css("left")=="0px")
    {
        $("#sideBar").animate({left:`-${colorBoxWidth}`} , 1500);
    }
    else
    {
        $("#sideBar").animate({left:`0px`} , 1500);
    }
})