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
    slidesToScroll: 1
  });
  
  // Current number slide
  $('.slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.first-current').html(function(currentnum) {
      $('.first-current').empty();
      var number = ('0' + (++nextSlide)) ;
      return number;
    });
  });

  // Accordion
  $('.accordion__title').click(function(event) {
    if($('.accordion').hasClass('one')){
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300)
  });

  // Contact-checkbox
  $(document).on('click', '.checkbox', function(event) {
    if($(this).hasClass('active-check')){
      $(this).find('input').prop('checked',false);
      $('.checkbox[input]').css('opacity', '0');
    }else {
      $(this).find('input').prop('checked',true);
      $('.checkbox[input]').css('opacity', '1');
    }
    $(this).toggleClass('active-check');

    return false;
  });
});

// Animation
// function onEntry(entry) {
//    entry.forEach(change => {
//      if (change.isIntersecting) {
//       change.target.classList.add('element-show');
//      }
//    });
//  }
 
//  let options = {
//    threshold: [0.1] };
//  let observer = new IntersectionObserver(onEntry, options);
//  let elements = document.querySelectorAll('.element-animation');
 
//  for (let elm of elements) {
//    observer.observe(elm);
//  }

//  sca
let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.input__file-button-text').innerText = labelVal;
  });
});
