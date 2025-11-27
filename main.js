// Inicializa o carrossel Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true, // Faz o carrossel voltar ao início quando termina
  autoplay: {
    delay: 7000, // Troca de slide a cada 7 segundos
    disableOnInteraction: false, // Continua passando mesmo se o usuário clicar
  },
  pagination: {
    el: '.swiper-pagination', // Ativa as bolinhas
    clickable: true, // Permite clicar nas bolinhas
  },

  //effect: 'slide', Tipo de transição (pode usar 'fade' para suavizar)
  effect: 'fade',
  slidesPerView: 1, // Mostra 1 slide por vez
});

// CATEGORIAS
const categories = {
  altura: [
    { name: 'Capacete bombeiro', desc: 'Descrição do produto...', images: [] },
    { name: 'Luva de couro', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  industria: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  alimenticia: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  civil: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  laboratorio: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  soldagem: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  eletrica: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  respirar: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  limpeza: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  agro: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],

  armazem: [
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
    { name: '', desc: 'Descrição do produto...', images: [] },
  ],
};

// GERAR OS CARDS QUANDO CLICA NA CATEGORIA

function loadProducts(category) {
  const section = document.getElementById('products-section');
  const container = document.getElementById('products-container');
  const products = categories[category] || [];

  // mostra a seção dos cards
  section.style.display = 'block';

  container.innerHTML = products
    .map(
      (product) => `
      <div class="product-card">
        <h3>${product.name}</h3>
        <div class="product-images"></div>
        <p>${product.desc}</p>
      </div>
    `
    )
    .join('');
}

// BOTÃO DE FECHAR OS CARDS
document.getElementById('close-products').addEventListener('click', () => {
  document.getElementById('products-section').style.display = 'block';
  document.getElementById('close-products').style.display = 'block';
});

// CLIQUE NAS CATEGORIAS
document.querySelectorAll('.category-slide').forEach((slide) => {
  slide.addEventListener('click', function () {
    document.querySelectorAll('.category-slide').forEach((s) => s.classList.remove('active'));
    this.classList.add('active');

    const currentCategory = this.dataset.category;
    loadProducts(currentCategory);
  });
});

// CARROSSEL DAS CATEGORIAS
const categorySwiper = new Swiper('.categorySwiper', {
  slidesPerView: '3',
  spaceBetween: 20,
  loop: true,

  //  deixa deslizando sozinho continuamente
  speed: 0, // quanto maior, mais lento/mais suave
  autoplay: {
    delay: 0, // sem intervalo
    disableOnInteraction: false,
  },

  //  deixa o movimento livre sem travar
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
