$(document).ready( function() {

  $("#menu").on("click", "li:lt(3)", function(e){
    e.preventDefault();
    var $i = $(this).index();
      $("html, body").animate( {
          scrollTop: $("section:eq("+$i+")").offset().top
        }, 400);
  });

  $(".hamburger").on("click", function(){
    var $hide_nav = $("header nav");
    if ($hide_nav.is(":hidden")){
      $hide_nav.css("animation", "fadein 1s").show();
    }
    else {
      $hide_nav.css("animation", "fadeout 1s").fadeOut();
    }
  });

  function slideProjects() {
    var $window = $(window);
    if ($window.width() > 769) {
      $window.on("scroll", function(){
        $(".interactive-image").each(function(index) {
          if ($(this).offset().top < ($(document).scrollTop() + $(window).height())) {
            $(".project").eq(index).addClass("project-animate");
          }
        });
      });
    }
    else {
      $(".project").css("left", 0);
    }
  }

  slideProjects();
});
