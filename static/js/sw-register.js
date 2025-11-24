// static/js/sw-register.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // IMPORTANTE: Use o caminho absoluto para o Service Worker
    navigator.serviceWorker.register('/static/js/sw.js')
      .then(function(registration) {
        console.log('Service Worker registrado com sucesso:', registration.scope);
      })
      .catch(function(error) {
        console.log('Falha no registro do Service Worker:', error);
      });
  });
}