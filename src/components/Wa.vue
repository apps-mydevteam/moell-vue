<template>
  <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=844457336851471&ev=PageView&noscript=1" /></noscript>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-size-2-tablet  is-size-3-mobile has-text-centered">
          Terima kasih Mom, Anda akan segera dialihkan ke whatsapp.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "app",
  mounted() {
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
    fbq('init', '844457336851471');
    fbq('track', 'PageView');
    fbq('track', 'Lead');

    let number = ['6281328309550', '628999309230', '6289699022720'];
    var getnumber = number[Math.floor(Math.random() * number.length)];
    setTimeout(function () {
      window.location = "https://wa.me/" + getnumber + "?text=Hai mom, saya mau order produk Moell";
    }, 2000);

  }
}
</script>