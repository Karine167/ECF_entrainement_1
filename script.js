const btn_carousel = document.getElementById('btn-carousel');
const carousel_show = document.getElementById('carousel');
btn_carousel.addEventListener('click',()=>{
  carousel_show.classList.remove('d-none');
})