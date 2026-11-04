// Small enhancements; the page works fully without JS.
(function () {
  // "Zobacz ceny" links open the matching price category.
  document.querySelectorAll('[data-open]').forEach(function (a) {
    a.addEventListener('click', function () {
      var d = document.getElementById(a.getAttribute('data-open'));
      if (d) d.open = true;
    });
  });
  // Close the mobile menu after choosing a link.
  var menu = document.querySelector('.menu');
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.open = false; });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
    });
  }
})();
