<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          Anda akan segera kami alihkan ke Marketplace <a href="https://moell.id/">moell.id</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)ttq.setAndDefer(e, ttq.methods[n]); return e }, ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) };
  ttq.load('C0R22MHURMH959SBPHH0');
  ttq.page();
}(window, document, 'ttq');

!function (f, b, e, v, n, t, s) {
  if (f.fbq) return; n = f.fbq = function () {
    n.callMethod ?
      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  };
  if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
  n.queue = []; t = b.createElement(e); t.async = !0;
  t.src = v; s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s)
}(window, document, 'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '504625507645037');
fbq('init', '<?= $pixel; ?>');
fbq('track', 'PageView');
fbq('track', 'AddToCart');


export default {
  name: 'Out',
  mounted() {

    setTimeout(function () {
      window.location = 'https://www.tiktok.com/@moell.id?_t=8Y8h5vwYYoj&_r=1';
    }, 2000);

  },
};


</script>