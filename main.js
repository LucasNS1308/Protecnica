// CAROSSEL COM IMAGENS (HEADER)
const swiper1 = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  effect: 'fade',
  slidesPerView: 1,
});

// CARROSSEL PRODUTOS (SEÇÃO PRODUTOS)
const swiper2 = new Swiper('.categorySwiper', {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// CATEGORIAS DOS PRODUTOS
const categories = {
  altura: [
    {
      name: 'Capacete',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: ['./produtos/14161.png'],
    },
    {
      name: 'Luva',
      desc: 'Descrição do produto...',
      ca: 'Ca: ',
      ref: 'Referência:',
      images: ['./produtos/13932.png'],
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

  logistica: [
    {
      name: '',
      desc: 'Descrição do produto...',
      ca: 'Ca: 3658224',
      ref: 'Referência:',
      images: [],
    },
  ],
};

//  ELEMENTOS DOM
const productsSection = document.getElementById('products-section');
const productsContainer = document.getElementById('products-container');
const closeBtn = document.getElementById('close-products');

// FUNÇÃO: MOSTRAR SKELETON ANTES DOS CARDS

function showSkeleton() {
  const skeletons = Array(6)
    .fill(
      `
      <div class="product-card">
        <div class="skeleton skel-img"></div>
        <div class="skeleton skel-line"></div>
        <div class="skeleton skel-line"></div>
        <div class="skeleton skel-line"></div>
      </div>
    `
    )
    .join('');

  productsContainer.innerHTML = skeletons;
}

// FUNÇÃO: CARREGAR PRODUTOS

function loadProducts(category) {
  productsSection.classList.add('visible');

  showSkeleton();

  setTimeout(() => {
    const items = categories[category] || [];

    productsContainer.innerHTML = items
      .map((p, i) => {
        const imgs = p.images.map((src) => `<img src="${src}" alt="${p.name}">`).join('');

        return `
          <div class="product-card" style="animation-delay:${i * 0.1}s">
            <h3>${p.name}</h3>

            <div class="product-images">
              ${imgs}
            </div>

            <p>${p.desc}</p>
            <p>${p.ca}</p>
            <p>${p.ref}</p>
          </div>
        `;
      })
      .join('');
  }, 600);
}

// EVENTO: CLIQUE NAS CATEGORIAS

document.querySelectorAll('.category-slide').forEach((slide) => {
  slide.addEventListener('click', () => {
    const category = slide.dataset.category;
    loadProducts(category);
  });
});

// FECHAR ÁREA DOS CARDS

closeBtn.addEventListener('click', () => {
  productsSection.classList.remove('visible');
});

//MENU HAMBURGUER DO HEADER
const menuToggle = document.getElementById('mobile-menu');
const menuNav = document.getElementById('menu');
const backdrop = document.createElement('div');
backdrop.id = 'menu-backdrop';
document.body.appendChild(backdrop);

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  menuNav.classList.toggle('active');
  backdrop.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('is-active');
    menuNav.classList.remove('active');
  });
});

// Fechar ao clicar no fundo escuro
backdrop.addEventListener('click', () => {
  menuToggle.classList.remove('is-active');
  menuNav.classList.remove('active');
  backdrop.classList.remove('active');
});

//CARROSSEL DAS MARCAS
const swiper3 = new Swiper('.swiperMark', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
  },
});
