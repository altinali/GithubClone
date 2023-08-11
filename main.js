const menuBtn=document.querySelector('.rmenu')


const menuLinks=document.querySelector('.header-links')


menuBtn.addEventListener('click',()=> {
    menuLinks.classList.toggle('mobile-menu')
})