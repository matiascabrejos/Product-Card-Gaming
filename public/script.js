$(".product-colors span").click(function(){
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");
    $("body").css("background",$(this).attr("data-color"));
    $(".product-pic").css("background-image",$(this).attr("data-pic"));
  });