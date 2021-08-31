let menu = document.querySelector('.menu');
let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let body = document.querySelector('body');
let headlineMain = document.querySelector('.headline-main');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    menu.style.display = 'flex';
    menu.style.top = '0';
    // headlineMain.style.filter = 'blur(4px)';
    // body.style.filter = 'blur(4px)';
    
}

function close(){
    menu.style.top = '-150%';
}
