// Select DOM Itmes

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');
const lightTheme = document.getElementById('light-mode');
const blueTheme = document.getElementById('blue-mode');
const greenTheme = document.getElementById('green-mode');
const purpleTheme = document.getElementById('purple-mode');



// set Initial State

let showMenu = false;


//Functions for toggle Menu
function toggleMenu(){
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;
    }
}

function message(){
 
}


// EventListners

menuBtn.addEventListener('click',toggleMenu);

    lightTheme.addEventListener('click', message);

