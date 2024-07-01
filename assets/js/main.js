var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let slideHero = new Swiper('.HeroSlide', {
  navigation: {
    prevEl: ".btn_slide.next",
    nextEl: ".btn_slide.prev",
  },
  pagination: {
    el: '.swiper-pagination ',
    clickable: true,
  },
  on: {
    init: function () {
        const swiperInstance = this;
        const paginationNumbers = document.querySelector('.swiper-pagination.bottom');
        paginationNumbers.innerHTML = '';
        swiperInstance.slides.forEach((slide, index) => {
            const bullet = document.createElement('div');
            bullet.classList.add('swiper-pagination-bullet');
            bullet.addEventListener('click', () => {
            swiperInstance.slideTo(index);
            });
            paginationNumbers.appendChild(bullet);
        });
        swiperInstance.on('slideChange', () => {
            const activeIndex = swiperInstance.activeIndex;
            document.querySelectorAll('.swiper-pagination.bottom .swiper-pagination-bullet').forEach((bullet, index) => {
                bullet.classList.toggle('swiper-pagination-bullet-active', index === activeIndex);
            });
        });
        swiperInstance.emit('slideChange'); // Update pagination on init
    }
  }
}
)



$('.burger_icon').click(function () {
  $('.menu_overlay').toggleClass('active')
})
$('.exit_menu').click(function () {
  $('.menu_overlay').removeClass('active')
})
$('.menu_overlay').click(function (ev) {
  if ($(ev.target).is('.menu_overlay') || $(ev.target).is('.modal_exit')) {
    $('.menu_overlay').removeClass('active')

  }
})

$('.drop_icon').click(function (e) {
  $(this).toggleClass('rotate');
  $(this).parent().parent().find('.child_link_content').slideToggle();
});
// $('.form_item input').focus(function () {
//   $(this).parent().find('.placeholder').css({display:'none'})
// });


$(document).ready(function() {
  var $inputField = $('.form_item input');
  var $placeholder = $('.placeholder');

  $inputField.focus(function() {
    $(this).parent().find( $placeholder).fadeOut(150);
    // $placeholder.hide();
  });

  $inputField.blur(function() {
    if ($(this).val() === '') {
    $(this).parent().find( $placeholder).fadeIn(150);
    }
  });

  if ($(this).val() !== '') {
    $(this).parent().find( $placeholder).fadeIn(150);
  }
  function Slide (){
  var commentSlide = new Swiper('.commentSlide',{
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    breakpoints:{
    0:{slidesPerView:1.2,spaceBetween:15},
    768:{slidesPerView:4,spaceBetween:25},
    }
  })
  }
  Slide()
});

new WOW().init();
$(window).scroll(function(){
  if(scrollY > 10){
    $('.header.index').addClass('light');
    $('.header .logo img').attr('src', './assets/image/logo2.svg')
    $('.burger_icon').addClass('light')
    $('.icons_select ').addClass('light')
  }else{
    $('.icons_select ').removeClass('light')
    $('.header.index').removeClass('light')
    $('.header .logo img').attr('src', './assets/image/logo.svg')
    $('.burger_icon').removeClass('light')
  }
  
})