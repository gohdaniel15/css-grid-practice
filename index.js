$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 70) {
      $('.hello').hide(500);
    } else {
      $('.hello').show(500);
    }
  })
})

