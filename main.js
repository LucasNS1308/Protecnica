// CAROSSEL COM IMAGENS (HEADER)
const swiper = new Swiper('.mySwiper', {
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

// Elementos DOM
const productsSection = document.getElementById('products-section');
const productsContainer = document.getElementById('products-container');
const closeBtn = document.getElementById('close-products');

// FUNÇÃO: mostra skeleton loading

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

// FUNÇÃO: carregar produtos

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

// EVENTO: clique nas categorias

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

// EFEITO NO HEADER
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.nav-link');
const underline = document.querySelector('.menu-underline');

let currentRect = null;

links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    const rect = link.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    const left = rect.left - menuRect.left;
    const width = rect.width;

    if (currentRect) {
      const currentLeft = currentRect.left;
      const currentWidth = currentRect.width;

      // se o novo item está À DIREITA → expandir até cobrir tudo até lá
      if (left > currentLeft) {
        underline.style.left = currentLeft + 'px';
        underline.style.width = left + width - currentLeft + 'px';
      } else {
        // se o novo item está À ESQUERDA → expandir até a esquerda
        underline.style.left = left + 'px';
        underline.style.width = currentLeft + currentWidth - left + 'px';
      }

      // depois de um mini delay, encolher para encaixar exatamente
      setTimeout(() => {
        underline.style.left = left + 'px';
        underline.style.width = width + 'px';
      }, 150);
    } else {
      // primeira vez → só posiciona
      underline.style.left = left + 'px';
      underline.style.width = width + 'px';
    }

    currentRect = { left, width };
  });
});

// opcional: tira underline ao sair do menu
menu.addEventListener('mouseleave', () => {
  underline.style.width = '0px';
});

//MENU HAMBURGUER DO HEADER
const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open'); // abre/fecha o menu
  menuBtn.classList.toggle('open'); // anima o ícone
});
