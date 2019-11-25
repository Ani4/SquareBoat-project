$(document).ready(function() {
  $(".nav__links li a").click(function() {
    $("li a").removeClass("right_now");
    $("li a").removeClass("disabled-nav");
    $(this).addClass("right_now");
    $(this).addClass("disabled-nav");
  });

  $("li.nav-item").click(function(e) {
    console.log(e);
    $("li.nav-item").attr("id", "");
    $(this).attr("id", "selected-link");
  });
});
