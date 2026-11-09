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

// Gallery lightbox (links open the full image without JS).
(function () {
  var dlg = document.querySelector('dialog.lb');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-lb]'));
  var img = dlg.querySelector('img'), i = 0;
  function show(n) {
    i = (n + links.length) % links.length;
    img.src = links[i].getAttribute('href');
    img.alt = links[i].querySelector('img').alt;
  }
  links.forEach(function (a, n) {
    a.addEventListener('click', function (e) { e.preventDefault(); show(n); dlg.showModal(); });
  });
  dlg.querySelector('.lb-x').addEventListener('click', function () { dlg.close(); });
  dlg.querySelector('.lb-p').addEventListener('click', function () { show(i - 1); });
  dlg.querySelector('.lb-n').addEventListener('click', function () { show(i + 1); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') show(i + 1);
    if (e.key === 'ArrowLeft') show(i - 1);
  });
})();
