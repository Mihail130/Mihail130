const brgrBtn = document.querySelector('.hamburger');
const menuItems = document.querySelector('.menu-items');

brgrBtn.addEventListener('click', () => {
    menuItems.classList.toggle('active');
})