$(document).ready( function(){

  $("nav ul li a").click( function() {
    var i = $('nav ul li a').index(this)+1;
    if(i<=4){
      if($(window).width()>768){
          $("html,body").animate({
          scrollTop: $("section:nth-of-type("+i+")").offset().top-50
        },400);
      }
      else {
        $("html, body").animate( {
            scrollTop: $("section:nth-of-type("+i+")").offset().top
        }, 400);
      }
    }
    else {
      $("html, body").animate( {
          scrollTop: $("footer").offset().top
      }, 400);
    }
  });

  $("a.mobile-btn").click(function(){
    if($("header nav").is(":hidden")) {
      $("header nav").show();
      $("a.mobile-btn").toggleClass("active");
    }
    else {
      $("header nav").hide();
      $("a.mobile-btn").removeClass("active");
    }
  });

  $("footer a.up").click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 400);
  });


    if($(document).scrollTop() > $("main .catalog").offset().top)
    {
      $("footer a.up").show();
    }
    else {
      $("footer a.up").hide();
    }
});
