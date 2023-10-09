const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('nav_link')

const linkAction = function () {
    navMenu.remove = ('show-menu')
}

navLink.forEach((item) => item.addEventListener('click', linkAction))

gsap.from('home_img-2', 1.2, {opacity: 0, y: 200, delay: .1});
gsap.from('.home_img-3', 1.2, {opacity: 0, y: 200, delay: .5});
gsap.from('.home_data', 1.2, {opacity: 0, y: -60, delay: 1});
gsap.from('.home_bird-1', 1.2, {opacity: 0, x: -80, delay: 1.1});
gsap.from('.home_bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2});
gsap.from('.home_img-1', 1.2, {opacity: 0, y: 200, delay: 1.2});
gsap.from('.home_img-4', 1.2, {opacity: 0, y: 200, delay: 1.3});