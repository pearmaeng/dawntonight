// JavaScript

// Hamburger Menu
let burger = document.querySelector('.m-burger');
let xbtn = document.querySelector('.xbtn');
let mobileNav = document.querySelector('.m-nav');

function openSideNav() {
    mobileNav.style.width = '50vw';
}

function closeSideNav() {
    mobileNav.style.width = '0vw';
}

burger.addEventListener('click', openSideNav);
xbtn.addEventListener('click', closeSideNav);