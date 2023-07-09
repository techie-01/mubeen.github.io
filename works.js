const mainMenu = document.querySelector('.nav_links');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    closeMenu.style.display = 'block';
    mainMenu.style.top = '-100%';
}


