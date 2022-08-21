const burgerBtn = document.querySelector('.burger-btn');
const headerMemu = document.querySelector('.header__bottom-list');
burgerBtn.addEventListener('click', function(){
  headerMemu.classList.toggle('header__bottom-list--active');
  burgerBtn.classList.toggle('burger-btn--active');
})


const swiper = new Swiper(".testimonial__slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    940: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});



const items = document.querySelectorAll('.popular-menu__card');
const slider = document.querySelector('.popular-menu__cards-slider');
const maxScrollLeft = slider.scrollWidth - slider.clientWidth
function autoPlay() {
  if (slider.scrollLeft > (maxScrollLeft - 1)) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}
let play = setInterval(autoPlay, 50);
items.forEach(item => {
  item.addEventListener('mouseover', function(){
    clearInterval(play);
  })
  item.addEventListener('mouseout', function(){
    return play = setInterval(autoPlay, 50);
  })
});


const blockItems = document.querySelectorAll('.footer__content-info__wrap');

blockItems.forEach(el => {
  const blockItemBtn = el.querySelector('.footer__content-info__subtitle');
  const blockItemList = el.querySelector('.footer__content-info__list');

  blockItemBtn.addEventListener('click', function(){
    blockItemBtn.classList.toggle('footer__content-info__subtitle--active');
    blockItemList.classList.toggle('footer__content-info__list--active');
  })
});