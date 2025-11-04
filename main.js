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
