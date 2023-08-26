document.querySelector('.nav-icon').addEventListener('click', function() {
    this.querySelector('.nav-icon__middle').classList.toggle('nav-icon--active')
})

const navIcon = document.querySelector('.nav__button > .nav-icon');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--non-active)');
const body = document.querySelector('body');

navIcon.addEventListener('click', function() {
    this.classList.toggle('nav-icon--active');
    navList.classList.toggle('nav__list--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('overflow--hidden');
})

navLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        navIcon.classList.remove('nav-icon--active');
        navList.classList.remove('nav__list--active');
        nav.classList.remove('nav--active');
        body.classList.remove('overflow--hidden');
    })
})