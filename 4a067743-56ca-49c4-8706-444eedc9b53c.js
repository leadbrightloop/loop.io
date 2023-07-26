// ========== Matomo ==========
var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://leadbright1.matomo.cloud/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '14']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='//cdn.matomo.cloud/leadbright1.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
})();

// ========== Mouseflow ==========
window._mfq = window._mfq || [];
(function() {
  var mf = document.createElement("script");
  mf.type = "text/javascript"; mf.defer = true;
  mf.src = "//cdn.mouseflow.com/projects/ee0f2daa-c91e-4bff-ac93-1dd6f78ac357.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();
