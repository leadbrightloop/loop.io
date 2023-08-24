// ========== Primary Traffic Tracker ==========
var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setCookieDomain", "*.www.toursys.net"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://leadbright1.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '15']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='//cdn.matomo.cloud/leadbright1.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();

// ========== Additional Heatmaps ==========
window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/60bbfb05-c267-4724-aea9-9453e577fee2.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
