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
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: [],
    },
  ],

  industria: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  alimenticia: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  civil: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  laboratorio: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  soldagem: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  eletrica: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  respirar: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  limpeza: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  agro: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],

  armazem: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],
};

// Função para marcar categoria ativa visualmente
function markActiveCategory(category) {
  document.querySelectorAll('.category-slide').forEach((s) => {
    s.classList.toggle('active', s.dataset.category === category);
  });
}

// Função para carregar produtos e mostrar seção
function loadProducts(category) {
  const section = document.getElementById('products-section');
  const container = document.getElementById('products-container');
  const closeBtn = document.getElementById('close-products');

  const products = categories[category] || [];

  // mostra a seção e botão fechar
  section.style.display = 'block';
  closeBtn.style.display = 'block';

  section.scrollIntoView({ behavior: 'smooth' });

  container.innerHTML = products
    .map(
      (product) => `
      <div class="product-card">
        <h3>${product.name}</h3>
        <div class="product-images"></div>
        <p>${product.desc}</p>
        <p>${product.ca}</p>
        <p>${product.ref}</p>
      </div>
    `
    )
    .join('');
}

// Botão fechar — esconder seção e botão ao clicar
document.getElementById('close-products').addEventListener('click', () => {
  document.getElementById('products-section').style.display = 'none';
  document.getElementById('close-products').style.display = 'none';
});

// Evento clique nas categorias
document.querySelectorAll('.category-slide').forEach((slide) => {
  slide.addEventListener('click', function () {
    currentCategory = this.dataset.category;
    markActiveCategory(currentCategory);
    loadProducts(currentCategory);
  });
});

// Inicialização: categoria padrão
let currentCategory = 'altura'; // categoria válida
markActiveCategory(currentCategory);
loadProducts(currentCategory);

// Carrossel categoria
const categorySwiper = new Swiper('.categorySwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 0,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: false,
  freeModeMomentum: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
