$(document).ready( function() {

  $('ul li a').click(function(){
    var i = $('ul li a').index(this)+1;
      $("html, body").animate( {
          scrollTop: $("main section:nth-of-type("+i+")").offset().top
        }, 400);
  });

  $(".hamburger").click(function(){
    var hide_nav = $("header nav, footer");
    if (hide_nav.is(":hidden")){
      hide_nav.show();
    }
    else {
      hide_nav.hide();
    }
  });

});
