$(window).scroll(function () {
  $("nav").toggleClass("shadow-lg", $(this).scrollTop() > 80);
});

//animation