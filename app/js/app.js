$(document).ready(function () {
  // Слайдер интро
  $("#introSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      autoplay: true,
      prevArrow: $("#introArrowPrev"),
      nextArrow: $("#introArrowNext"),
      asNavFor: "#introNav",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
          },
        },
      ],
    });

  $("#introSlider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".intro__numbers__item").removeClass("intro__numbers__item--active");

      const currSlide = $(`.intro__numbers__item:nth-child(${nextSlide + 1})`);

      currSlide.addClass("intro__numbers__item--active");
    }
  );

  $("#introNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: "#introSlider",
    focusOnSelect: true,
  });

  $("[data-number]").click(function (evt) {
    evt.preventDefault();
    const thisNumberIndex = $(this).data("number");
    $("#introSlider").slick("slickGoTo", thisNumberIndex);
    $("#introNav").slick("slickGoTo", thisNumberIndex);
  });

  // "Плейсхолдеры" у инпутов
  $(".feedback__form__input").focus(function () {
    const formItem = $(this)
      .parents(".feedback__form__item")
      .find(".feedback__form__label");
    formItem.fadeOut();
  });

  $(".feedback__form__input").blur(function () {
    if ($(this).val().trim() === "") {
      const formItem = $(this)
        .parents(".feedback__form__item")
        .find(".feedback__form__label");
      formItem.fadeIn();
    }
  });

  // Маска для телефона
  $("#phone").mask("+7 999 999-99-99");

  // Подменю в навигации
  $(".nav__item--list").click(function (evt) {
    evt.preventDefault();
    $(this).toggleClass("nav__item--list--active");
  });

  // Бургер меню
  $("#nav__toggle").click(function (evt) {
    evt.preventDefault();

    $(this).toggleClass("active");

    $(".header__top__wrapper").toggleClass("header__top__wrapper--active");
    $("html").toggleClass("noscroll");
  });

  let header = $("#header");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
});
