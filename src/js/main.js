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

  // Slider testimonials
  $('.reviews-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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