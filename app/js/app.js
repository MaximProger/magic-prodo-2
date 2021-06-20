$(document).ready(function () {
  // Слайдер интро
  $("#introSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      // autoplay: true,
      prevArrow: $("#introArrowPrev"),
      nextArrow: $("#introArrowNext"),
      asNavFor: "#introNumbers,#introNav",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
          },
        },
      ],
    });

  $("#introNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: "#introSlider,#introNumbers",
    focusOnSelect: true,
  });

  $("#introNumbers").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: "#introSlider,#introNav",
    focusOnSelect: true,
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

  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

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
