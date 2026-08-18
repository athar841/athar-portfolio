AOS.init({
  duration: 700,
  once: true,
  offset: 60,
  easing: 'ease-out-cubic'
});

new Splide('.blog-splide', {
  perPage: 3,
  perMove: 1,
  gap: '1rem',
  pagination: true,
  arrows: true,
  breakpoints: {
    991: { perPage: 2 },
    767: { perPage: 1, arrows: false }
  }
}).mount();
