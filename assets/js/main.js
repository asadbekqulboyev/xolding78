$(document).ready(function () {
  // header
  function Header() {
    // scroll
    $(window).scroll(function () {
      if (scrollY > 10) {
        $('.header.index').addClass('light');
        $('.header.index .logo img').attr('src', './assets/image/logo2.svg')
        $('.header.index .burger_icon').addClass('light')
        $('.header.index .icons_select ').addClass('light')
        $('.header.index .header_right .mobile').addClass('light')
      } else {
        $('.icons_select ').removeClass('light')
        $('.header.index').removeClass('light')
        $('.header.index .logo img').attr('src', './assets/image/logo.svg')
        $('.header.index .burger_icon').removeClass('light')
        $('.header.index .icons_select ').removeClass('light')
        $('.header.index .header_right .mobile').removeClass('light')
      }
      
    })
    // open menu
    $('.burger_icon').click(function () {
      $(this).toggleClass('active')
      $('.menu_overlay').toggleClass('active')
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
    $('.dropdown').click(function (e) {
      $(this).children('.drop_icon').toggleClass('rotate');
      $(this).parent().children('.child_link_content').slideToggle();
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

    $inputField.each(function () {
        if ($(this).val() !== '') {
            $(this).parent().find($placeholder).fadeOut(0);
        } else {
            $(this).parent().find($placeholder).fadeIn(0);
        }
    });
}
Placeholder();


  // slide  add
    if ($(window).width() <= 1200) {
      $('.slide_object').addClass(' swiper')
      $('.objects').addClass('swiper-wrapper')
      $('.objects').removeClass('flex')
      $('.object').addClass('swiper-slide')
      let slide = new Swiper('.slide_object', {
      pagination: {
        el: '.pagination_loc',
        clickable: true,
      }
    })
    }

    // 
});

// footer toggle
$('.item_title').click(function () {
  console.log($(this).children('img').toggleClass('active'));
  $(this).parent('.footer_item').children('.slide_to').slideToggle()
})
$('.all_content').click(function () {
  $(this).hide()
  $('.features_item.hidden').toggleClass('show')
})
// modal
$('.types .type').click(function(e){
  e.preventDefault()
  // console.log($(this).children('.type_title').text());
  $('#filter2').fadeIn().css({display:'flex'})
})
$('.modal#filter2').click(function(ev){
  if ($(ev.target).is('.modal#filter2')) {
  $(this).fadeOut()
}

})
// filter 2 exit
$('#filter2 .exit_modal').click(function(){
 $('#filter2 ').css({display:'none'})
})
$('.forms').submit(function(e){
  e.preventDefault()
  $('#thank').fadeIn()
});
$('.top_content .button').click(function(e){
  e.preventDefault();
  $('.modal#carta').fadeIn();
})
$('.exit_carta').click(function(){
  $('.modal#carta').fadeOut();
})