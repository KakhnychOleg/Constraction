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



 $('.mobile div').on('click', () => {
  $('.mobile div').toggleClass('active');
  $('.mobile nav').toggleClass('open');
  $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
  $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}



 $('.reviews-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
