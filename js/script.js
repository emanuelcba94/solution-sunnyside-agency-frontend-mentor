const navLinks = document.querySelector('#nav_links')
const iconHamburger = document.querySelector('#nav__hamburger')


iconHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('visible');
})