const burger = document.querySelector('#burger');
const burgerIcon = burger.querySelector('img');
const nav = document.querySelector('.header__nav');

const subMenu = [...document.querySelectorAll('.header__nav__main__sub')];
const subMenuProduct = document.querySelector('.list-product');
const subMenuCompany = document.querySelector('.list-company');
const subMenuConnect = document.querySelector('.list-connect');

const linkPrimary = document.querySelectorAll('.link-primary');
const linkProduct = document.querySelector('.link-product');
const linkCompany = document.querySelector('.link-company');
const linkConnect = document.querySelector('.link-connect');

const linkProductAfter = document.querySelector('.link-product:after');


const arrowProduct = document.querySelector('.arrow-product');
const arrowCompany = document.querySelector('.arrow-company');
const arrowConnect = document.querySelector('.arrow-connect');


let isOpen = false;
const menuOpen = () => {
    if (isOpen) {
        burgerIcon.src = './images/icon-hamburger.svg';
        nav.style.display = 'none';
        isOpen = false;
        // return isRolled = false ????
    } else {
        burgerIcon.src = './images/icon-close.svg';
        nav.style.display = 'block'
        isOpen = true;
    }
}

let isRolled = false;
function showSubMenu(menu) {
    subMenu.forEach(x => x.style.display = 'none');
    
    if (isRolled === menu) {
        menu.style.display = 'none';
        
        return isRolled = false;
    } else {
        menu.style.display = 'block';

        return isRolled = menu;
    }
}


function linkRoll(menu) {
    let target = menu.target.classList[0];
    console.log(menu.target);
    let targetArrow = menu.target.querySelector('img');
    console.log(targetArrow);
    if (target.includes('product')) {
        showSubMenu(subMenuProduct);
        // target.querySelector('img').style = 'transform: rotate(180deg)';
        console.log(linkProductAfter);
    } else if (target.includes('company')) {
        showSubMenu(subMenuCompany);
    } else if (target.includes('connect')) {
        showSubMenu(subMenuConnect);
    }
    
}

// let isRolled = false;

// function linkRoll(index) {
//     let clicked = index.path[0].innerHTML.toLowerCase();
//     let clickedMenu = [...subMenu].find(x => x.classList.contains(`list-${clicked}`));
//     let clickedArrow = document.querySelector(`.arrow-${clicked}`);

//     if (isRolled) {
//         clickedMenu.style.display = 'none';
//         clickedArrow.style.transform = 'rotate(0deg)';
//         isRolled = false;
//     } else {
//         // subMenu.forEach(menu => menu.style.display = 'none');
//         clickedMenu.style.display = 'block';


//         // close others
//         clickedArrow.style.transform = 'rotate(180deg)';
//         isRolled = true;
//     }
// }

burger.addEventListener('click', menuOpen);
linkPrimary.forEach((link, i) => {
    link.addEventListener('click', linkRoll);
});

// ############# ZAMYKANIE MENU
document.addEventListener('click', e => {
    if (isOpen && burger.contains(e.target) || nav.contains(e.target) ) {
        return;
    } else {
        burgerIcon.src = './images/icon-hamburger.svg';
        nav.style.display = 'none';
        isOpen = false;
    }
})