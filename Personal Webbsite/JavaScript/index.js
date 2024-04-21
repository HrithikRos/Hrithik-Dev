const mobile_nav = document.querySelector('.mobile-nav-icons');
const header = document.querySelector('.header');

const toggleNavbar = () => {
header.classList.toggle('active');
}

mobile_nav.addEventListener('click', () =>  toggleNavbar());



// swipe animation 


var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      530: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );