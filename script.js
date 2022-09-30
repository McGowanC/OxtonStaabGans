const menuButtonMobile =document.querySelector('.mobile-hamburger-menu');
const menuCloseButtonMobile = document.querySelector('.close-mobile-menu');
const mobileMenuDiv = document.querySelector('.nav-bar-mobile')

menuButtonMobile.addEventListener('click',()=>{
    mobileMenuDiv.classList.toggle('show-mobile-menu')
})

menuCloseButtonMobile.addEventListener('click',()=>{
    mobileMenuDiv.classList.toggle('show-mobile-menu')
})