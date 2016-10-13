
console.log($(this).find('ul li a').attr('href'));
$('ul li a').click(function(evt){
    if(evt.target.getAttribute('href') == '#contact')
      $("html").animate( {
        scrollTop: $("main section:nth-of-type(2)").offset().top
      }, 400);
});
