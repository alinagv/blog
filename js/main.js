$(document).ready(function () {
  $(".wrapper").addClass("loaded");

  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active");
    $(".menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });

  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }

  ibg();

  if ($(".testimonials__body").length > 0) {
    $(".testimonials__body").slick({
      //autoplay:true,
      //infinite:false,
      dots: true,
      arrows: false,
      accessibility: false,
      testimonialsToSpeed: 3000,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: 'button type="button" class="slick-prev"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {},
        },
      ],
    });
  }
});
