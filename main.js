// Inicializa o carrossel Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true, // Faz o carrossel voltar ao início quando termina
  autoplay: {
    delay: 7000, // Troca de slide a cada 3 segundos
    disableOnInteraction: false, // Continua passando mesmo se o usuário clicar
  },
  pagination: {
    el: '.swiper-pagination', // Ativa as bolinhas
    clickable: true, // Permite clicar nas bolinhas
  },
  navigation: {
    nextEl: '.swiper-button-next', // Botão próximo
    prevEl: '.swiper-button-prev', // Botão anterior
  },
  //effect: 'slide', Tipo de transição (pode usar 'fade' para suavizar)
  effect: 'fade',
  slidesPerView: 1, // Mostra 1 slide por vez
});

// CATEGORIAS FAKE (VOCÊ TROCA DEPOIS)
const categories = {
  luvas: [
    { name: 'Luvas Vaqueta', desc: 'Descrição do produto...', images: [] },
    { name: 'Produto 2', desc: 'Descrição do produto...', images: [] },
  ],
  categoria2: [{ name: 'Outro Produto', desc: 'Descrição...', images: [] }],
  categoria3: [],
  categoria4: [],
};

// GERAR OS CARDS QUANDO CLICA NA CATEGORIA
function loadProducts(category) {
  const container = document.getElementById('products-container');
  const products = categories[category] || [];

  container.innerHTML = products
    .map(
      (product) => `
      <div class="product-card">
        <div class="product-images"></div>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
      </div>
    `
    )
    .join('');
}

// CARROSSEL DAS CATEGORIAS
const categorySwiper = new Swiper('.categorySwiper', {
  slidesPerView: '3',
  spaceBetween: 20,
  loop: true,

  // 🔥 deixa deslizando sozinho continuamente
  speed: 0, // quanto maior, mais lento/mais suave
  autoplay: {
    delay: 0, // sem intervalo
    disableOnInteraction: false,
  },

  // 🔥 deixa o movimento livre sem travar
  freeMode: false,
  freeModeMomentum: false,

  // mantém os botões funcionando
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// CATEGORIA PADRÃO
let currentCategory = 'categoria1';
loadProducts(currentCategory);

// CLIQUE NAS CATEGORIAS
document.querySelectorAll('.category-slide').forEach((slide) => {
  slide.addEventListener('click', function () {
    document.querySelectorAll('.category-slide').forEach((s) => s.classList.remove('active'));
    this.classList.add('active');

    currentCategory = this.dataset.category;
    loadProducts(currentCategory);
  });
});
