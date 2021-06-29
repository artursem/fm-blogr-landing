const burger = document.querySelector('#burger');
const burgerIcon = burger.querySelector('img');
const nav = document.querySelector('.header__nav');
let isOpen = false;
const menuOpen = () => {
    if (isOpen) {
        burgerIcon.src = './images/icon-hamburger.svg';
        nav.style.display = 'none';
        isOpen = false;
    } else {
        burgerIcon.src = './images/icon-close.svg';
        nav.style.display = 'block'
        isOpen = true;
    }

}

burger.addEventListener('click', menuOpen);