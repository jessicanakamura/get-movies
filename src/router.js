import Router from "vanilla-router";

const router = new Router({
  mode: 'history',
});

router.add('/', () => {
  router.navigateTo('/lista-de-filmes')
})

router.add('/lista-de-filmes', () => {
  fetchAndRender('./pages/moviesList/index.html')
})

router.add('/detalhes-do-filme', () => {
  fetchAndRender('./pages/movieDetails/index.html')
})

function fetchAndRender(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html;
    })
    .catch(error => {
      console.error('Ocorreu um erro ao buscar o conteúdo HTML:', error);
    })
}

export default router;