export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
      // Script de Smartsupp
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        var _smartsupp = _smartsupp || {};
        _smartsupp.key = '1f4697f97a68dc758c3c8e614bdbb7b5ecf54874';
        window.smartsupp||(function(d) {
          var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
          s=d.getElementsByTagName('script')[0];c=d.createElement('script');
          c.type='text/javascript';c.charset='utf-8';c.async=true;
          c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
        })(document);
      `;
      document.head.appendChild(script);
    }
  });
  