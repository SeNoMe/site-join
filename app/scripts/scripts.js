// Menu Dropdown

      /* iOS re-orientation fix */
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
  var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
  if (viewportmeta) {
    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';

    document.body.addEventListener('gesturestart', function() {
      viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
    }, false);
  }

  /* iOS hides Safari address bar */
  window.addEventListener("load",function() {
    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 300);
  });
  }
