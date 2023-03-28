// ========== Mouseflow ==========
window._mfq = window._mfq || [];
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript";
  mf.defer = true;
  mf.src = "//cdn.mouseflow.com/projects/6a68c99a-078b-4e22-aac8-291397a0c09e.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();

// ========== Matomo ==========
var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://leadbright1.matomo.cloud/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '6']);
  var d=document,
      g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];
  g.async=true;
  g.src='//cdn.matomo.cloud/leadbright1.matomo.cloud/matomo.js';
  s.parentNode.insertBefore(g,s);
})();
