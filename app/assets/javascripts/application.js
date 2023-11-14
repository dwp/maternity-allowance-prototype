/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $('ul.dwp-sub-navigation__list li a').on('click', function(){
          $('ul.dwp-sub-navigation__list li a').removeAttr('aria-current');
          $(this).attr('aria-current', 'page');
  });

  $('ul.dwp-sub-navigation__list li a.top').on('click', function(){
          $('ul.dwp-sub-navigation__list li a').removeAttr('aria-current');
          $('ul.dwp-sub-navigation__list li a.decision').attr('aria-current', 'page');
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $('.float-right').show();
    } else {
      $('.float-right').hide();
    }
  });

  window.GOVUKFrontend.initAll()
})
