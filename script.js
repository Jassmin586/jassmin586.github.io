$(document).ready( function() {

  $('ul li a').click(function(){
    var i = $('ul li a').index(this)+1;
      $("html, body").animate( {
          scrollTop: $("main section:nth-of-type("+i+")").offset().top
        }, 400);
  });

});
