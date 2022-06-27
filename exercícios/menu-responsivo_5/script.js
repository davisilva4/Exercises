const menuButton = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    menuItems.classList.toggle('open');
})