( $(document).ready(function() {
      $(".mobile-btn").click(function() {
        var mobile_nav = $("header nav");
        if (mobile_nav.is(":hidden")){
          mobile_nav.show();
        }
        else {
          mobile_nav.hide();
        }
      });
    })
);
