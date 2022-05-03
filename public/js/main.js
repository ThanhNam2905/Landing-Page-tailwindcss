
// navbar-menu
const menuBtnEle = document.querySelector('#menu-btn i');
const navbarMenuEle = document.querySelector('#navbar');

menuBtnEle.addEventListener('click', () => {
    navbarMenuEle.classList.toggle('active');
    menuBtnEle.classList.toggle('fa-xmark');
})
