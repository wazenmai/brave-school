$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 0) {
    $(".bg-light").removeClass("transparent");
  } else {
    $(".bg-light").addClass("transparent");
  }

  if (height + 100 > $("#section-13").offset().top){
    $("header .nav-link").removeClass("active");
    $("#qa-link").addClass("active");
  } else if (height + 100 > $("#section-11").offset().top){
    $("header .nav-link").removeClass("active");
    $("#members-link").addClass("active");
  } else if (height+100 > $("#section-8").offset().top){
    $("header .nav-link").removeClass("active");
    $("#schedule-link").addClass("active");
  } else if (height+100 > $("#section-6").offset().top){
    $("header .nav-link").removeClass("active");
    $("#intro-link").addClass("active");
  } else {
    $("header .nav-link").removeClass("active");
  }
});
