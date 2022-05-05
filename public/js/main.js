
// navbar-menu
const menuBtnEle = document.querySelector('#menu-btn i');
const navbarMenuEle = document.querySelector('#navbar');
const scrollTopBtnEle = document.querySelector('#scroll-top i');

menuBtnEle.addEventListener('click', () => {
    navbarMenuEle.classList.toggle('active');
    menuBtnEle.classList.toggle('fa-xmark');
    scrollTopBtnEle.classList.remove("active");
})

scrollTopBtnEle.addEventListener('click', () => {
    scrollTo({
        behavior: 'smooth',
        top: 0
    })
})

window.onscroll = () => {
    if(scrollY > 300) {
        scrollTopBtnEle.classList.add("active");
    }
    else {
        scrollTopBtnEle.classList.remove("active");
    }
}