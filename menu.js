const burger = document.querySelector('#burger');
const burgerIcon = burger.querySelector('img');
const nav = document.querySelector('.header__nav');

const primaryList = [...nav.querySelectorAll('.header__nav__main')];
const primaryLinks = [...nav.querySelectorAll('.link-primary')];
const primaryArrows = [...nav.querySelectorAll('img')];
const secondaryList = [...nav.querySelectorAll('.header__nav__main__sub')];


let isOpen = false;
const menuOpen = () => {
    if (isOpen) {
        burgerIcon.src = './images/icon-hamburger.svg';
        nav.style.display = 'none';
        isOpen = false;
        // isRolled = false; ##########################################
    } else {
        burgerIcon.src = './images/icon-close.svg';
        nav.style.display = 'block'
        isOpen = true;
    }
}
let isRolled = false;
const rollMenu = (i) => {
    if (isRolled === false) {
        primaryArrows[i].style.transform = 'rotate(180deg)';
        // secondaryList[i].style.display = 'block';
        
        secondaryList[i].style.maxHeight = '1000px';

        isRolled = i;
        return isRolled;
    } else if (isRolled === i) {
        primaryArrows.forEach(arrow => arrow.style.transform = 'rotate(0)');
        // secondaryList.forEach(list => list.style.display = 'none');
        secondaryList.forEach(list => list.style.maxHeight = '0');

        isRolled = false;
        return isRolled;
    } else {
        primaryArrows.forEach(arrow => arrow.style.transform = 'rotate(0)');
        // secondaryList.forEach(list => list.style.display = 'none');
        secondaryList.forEach(list => list.style.maxHeight = '0');

        primaryArrows[i].style.transform = 'rotate(180deg)';
        // secondaryList[i].style.display = 'block';
        secondaryList[i].style.maxHeight = '1000px';
        isRolled = i;
        return isRolled;
    }

}

const linkClicked = (e) => {
    if ([...e.target.classList][0] === 'link-product') {
        rollMenu(0);
    }  else if ([...e.target.classList][0] === 'link-company') {
        rollMenu(1);
    } else if ([...e.target.classList][0] === 'link-connect') {
        rollMenu(2);
    }
}



primaryLinks.forEach(link => link.addEventListener('click', linkClicked));
burger.addEventListener('click', menuOpen);
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