$(document).ready(function () {
  // SHOW SCROLL TO TOP BUTTON
  $(window).scroll(function () {
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // SCROLL TO TOP
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // TOGGLE MENU - NAVBAR
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // TYPING ANIMATION SCRIPT
  let typed = new Typed('.typed', {
    strings: ['TypeScript', 'NextJS', 'Go (Back End)', 'WebDev'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
