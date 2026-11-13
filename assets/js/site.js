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

// Sticky booking button: appears once the first booking button has scrolled away,
// hides while the contact section's own button is on screen.
(function () {
  var bar = document.querySelector('.sticky-cta');
  var anchor = document.querySelector('[data-sticky-anchor]');
  if (!bar || !anchor || !('IntersectionObserver' in window)) return;
  var past = false, atContact = false;
  function update() { bar.classList.toggle('on', past && !atContact); }
  new IntersectionObserver(function (es) {
    var e = es[0]; past = !e.isIntersecting && e.boundingClientRect.top < 0; update();
  }).observe(anchor);
  var contact = document.querySelector('#kontakt .btns');
  if (contact) new IntersectionObserver(function (es) { atContact = es[0].isIntersecting; update(); }).observe(contact);
})();

// Count-up for the rating numbers.
(function () {
  var els = document.querySelectorAll('[data-count]');
  if (!els.length || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function run(el) {
    var to = parseFloat(el.getAttribute('data-count')), dec = +(el.getAttribute('data-dec') || 0);
    var sep = el.getAttribute('data-sep') || '.', t0 = null, dur = 1200;
    function frame(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), v = to * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec).replace('.', sep);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); run(e.target); } });
  }, { threshold: 0.6 });
  els.forEach(function (el) { io.observe(el); });
})();
