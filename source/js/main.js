function mobileOnlySlider() {
    $(document).ready(function(){
        $('.slider').slick({
          arrows: true,
          dots: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
          responsive: [{
            breakpoint: 1300,
            settings: {
              slidesToShow: 1,
              settings:"unslick"
            }
          }]
      });
    });
  }
  if (window.innerWidth < 1300) {
    mobileOnlySlider();
  }
  
  $(window).resize(function(e){
    if (window.innerWidth <= 1300) {
      if (!$('.slider').hasClass('slick-initialized')){
        mobileOnlySlider();
      }
  
    } else {
        if($('.slider').hasClass('slick-initialized')){
          $('.slider').slick('unslick');
      }
    }
  });