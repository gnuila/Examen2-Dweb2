const app = new Framework7({
  el: '#app',
  name: 'Examen 2',
  id: 'com.gabrielnuila.examen2',
  theme: 'auto',
  routes: [
    { path: '/', url: './pages/home.html' },
    { path: '/categorias/', url: './pages/categorias.html' },
  ],
});


$$(document).on('page:init', '.page[data-name="ejemplo"]', function () {
  const button = document.getElementById('demo-alert');
  if (button) button.addEventListener('click', () => app.dialog.alert('Framework7 está funcionando correctamente.', 'Página ejemplo'));
});
