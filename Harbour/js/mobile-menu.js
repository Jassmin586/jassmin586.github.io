( $(document).ready(function() {
      $("header").click(function() {
        var btn = $("header .header-background");
        if (btn.is(":hidden")){
          btn.show();
        }
        else {
          btn.hide();
        }
      });
    })
);
