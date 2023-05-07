const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

let menuOpen = false;
const height = document.querySelector('.hero_section').offsetHeight / 2;

hamburger.addEventListener('click', () => {
    if (menuOpen) {
        hamburger.nextElementSibling.style.display = 'none';
        return menuOpen = false;
    }
    menuOpen = true;
    hamburger.nextElementSibling.style.display = 'flex';
});

document.addEventListener('scroll', () => {
    let opacity = window.scrollY / height;
    nav.style.background = `rgba(232, 240, 242, ${ opacity > 1 ? 1 : opacity })`;
});