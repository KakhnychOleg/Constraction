function onEntry(entry) {
   entry.forEach(change => {
     if (change.isIntersecting) {
      change.target.classList.add('element-show');
     }
   });
 }
 
 let options = {
   threshold: [0.5] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('.element-animation');
 
 for (let elm of elements) {
   observer.observe(elm);
 }

$(document).ready(function () {
  // Mobile menu
  $('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile__nav').toggleClass('open');
    $('.mobile__list').toggleClass('show');
    $('html').toggleClass('hidden');
  });
  for (let a = 1; a <= $(".mobile__item").length; a++){
    $(".mobile__item:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
  };

  // Slider
  $('.slider__list').slick({
    dots: true,
    infinite: true,
    nextArrow: '.slick-next-slide',
    prevArrow: '.slick-prev-slide',
    appendDots: '.slider__dots',
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
console.log(currentSlide);
  });

  // Accordion
  $('.accordion__title').click(function(event) {
    if($('.accordion').hasClass('one')){
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300)
  });
});