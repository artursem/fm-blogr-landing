const burger = document.querySelector('#burger');
const burgerIcon = burger.querySelector('img');
const nav = document.querySelector('.header__nav');

const subMenu = document.querySelectorAll('.header__nav__main__sub');
const subMenuProduct = document.querySelector('.list-product');
const subMenuCompany = document.querySelector('.list-company');
const subMenuConnect = document.querySelector('.list-connect');

const linkPrimary = document.querySelectorAll('.link-primary');
const linkProduct = document.querySelector('.link-product');
const linkCompany = document.querySelector('.link-company');
const linkConnect = document.querySelector('.link-connect');


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

let isRolled = false;
function linkRoll(index) {
    let clicked = index.path[0].innerHTML.toLowerCase();
    let clickedMenu = [...subMenu].find(x => x.classList.contains(`list-${clicked}`));

    if (isRolled) {
        clickedMenu.style.display = 'none';
        //################3 OBRÓT STRZAŁKI! img?
        isRolled = false;
    } else {
        clickedMenu.style.display = 'block';
        isRolled = true;
    }
    
}

burger.addEventListener('click', menuOpen);
linkPrimary.forEach((link, i) => {
    link.addEventListener('click', linkRoll);
});

// ############# ZAMYKANIE MENU