// hero slide
// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });;

$(document).ready(function () {
  // header
  function Header() {
    // scroll
    $(window).scroll(function () {
      if (scrollY > 10) {
        $('.header.index').addClass('light');
        $('.header .logo img').attr('src', './assets/image/logo2.svg')
        $('.burger_icon').addClass('light')
        $('.icons_select ').addClass('light')
        $('.header_right .mobile').addClass('light')
      } else {
        $('.icons_select ').removeClass('light')
        $('.header.index').removeClass('light')
        $('.header .logo img').attr('src', './assets/image/logo.svg')
        $('.burger_icon').removeClass('light')
        $('.header_right .mobile').removeClass('light')
      }
    })
    // open menu
    // if ($('.menu_overlay').hasClass('active')) {
    //   $(this).children('.mobile').hide()
    //   $(this).children('.mobile2').show()
    // } else {
    //   $(this).children('.mobile').show()
    //   $(this).children('.mobile2').hide()
    // }'
    $('.burger_icon').click(function () {
      $(this).toggleClass('active')
      $('.menu_overlay').toggleClass('active')
      // if ($('.menu_overlay').hasClass('active')) {
      //   console.log('hello');
      //   $(this).children('.mobile:first').hide()
      //   $(this).children('.mobile2').show()
      // } else {
      //   $(this).children('.mobile:first').hide()
      //   $(this).children('.mobile2').show()
      //   console.log('ex');
      // }
    })
    // close menu
    $('.exit_menu').click(function () {
      $('.menu_overlay').removeClass('active')
    })
    $('.menu_overlay').click(function (ev) {
      if ($(ev.target).is('.menu_overlay') || $(ev.target).is('.modal_exit')) {
        $('.menu_overlay').removeClass('active')

      }
    })
    // slidetoggle links
    $('.drop_icon').click(function (e) {
      $(this).toggleClass('rotate');
      $(this).parent().parent().find('.child_link_content').slideToggle();
    });

  }
  Header()
  // slide hero
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
  })
  // comment
  function Slide() {
    var commentSlide = new Swiper('.commentSlide', {
      pagination: {
        el: '.pagination',
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1.15, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 25 },
        1200: { slidesPerView: 2.5, spaceBetween: 25 },
        1400: { slidesPerView: 3.5, spaceBetween: 25 },
        1562: { slidesPerView: 4, spaceBetween: 25 }
      }
    })
  }
  Slide()
  // wow js
  new WOW().init();
  // placeholder
  function Placeholder() {
    var $inputField = $('.form_item input');
    var $placeholder = $('.placeholder');
    $inputField.focus(function () {
      $(this).parent().find($placeholder).fadeOut(150);
    });
    $inputField.blur(function () {
      if ($(this).val() === '') {
        $(this).parent().find($placeholder).fadeIn(150);
      }
    });
    if ($(this).val() !== '') {
      $(this).parent().find($placeholder).fadeIn(150);
    }
  }
  Placeholder()
  // slide



});

// $(window).resize(function(){
// addSwipper('','','',{
//   slide
// });
if ($(window).width() <= 1200) {
  $('.slide_object').addClass(' swiper')
  $('.objects').addClass('swiper-wrapper')
  $('.objects').removeClass('flex')
  $('.object').addClass('swiper-slide')
}
// })
let slide = new Swiper('.slide_object', {
  pagination: {
    el: '.pagination_loc',
    clickable: true,
  }
})
$('.item_title').click(function () {
  $(this).parent('.footer_item').children('.slide_to').slideToggle()
})
$('.all_content').click(function () { })
// function addSwipper(mainClass, wrapperClass, slideClass, options){

// }
$('.all_content').click(function () {
  $(this).hide()
  $('.features_item.hidden').toggleClass('show')
})
// $(document).ready(function () {



