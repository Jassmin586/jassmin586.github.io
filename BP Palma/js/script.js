$(document).ready( function(){

  $("nav ul li a").click( function() {
    var i = $('nav ul li a').index(this)+1;
    $("html, body").animate( {
      scrollTop: $("section:nth-of-type("+i+")").offset().top
    }, 400);
  });

});
