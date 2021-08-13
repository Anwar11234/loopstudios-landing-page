const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcon = document.querySelector('.menu-btn img');
const menu = document.querySelector('header nav');

const toggleMenu = () => { 
    let ariaExpanded = menuBtn.getAttribute('aria-expanded');
    menu.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded' , ariaExpanded === 'true'? 'false': 'true');
}

const toggleMenuBtnIcon = () => { 
    if(menu.classList.contains('active')) { 
        menuBtnIcon.src = 'images/icon-close.svg';
        menuBtnIcon.alt = 'close menu';
    }
    else{ 
        menuBtnIcon.src = 'images/icon-hamburger.svg';
        menuBtnIcon.alt = 'open menu'
    }
}

menuBtn.addEventListener('click' , () => { 
    toggleMenu();
    toggleMenuBtnIcon();
});