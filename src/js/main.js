import '../scss/styles.scss'
import { Offcanvas } from 'bootstrap'
import Swiper, { Navigation, Pagination } from 'swiper';
import VanillaTilt from 'vanilla-tilt';
import AOS from 'aos';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    cssMode: false,
    simulateTouch : true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        }, 1199: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
}
const link = document.querySelectorAll('a[href^="#"]');
link.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        scrollTo(item.getAttribute('href').substring(1));
    } )
});


const currentYear = document.getElementById("currentYear");
currentYear.innerText = new Date().getFullYear();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header_scroll');
    } else {
        header.classList.remove('header_scroll');
    }
});

AOS.init({
    easing: 'linear',
});

VanillaTilt.init(document.querySelectorAll(".title_effect"), {
    max: 5,
    speed: 100
});