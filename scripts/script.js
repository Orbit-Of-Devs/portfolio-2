let flag = 1

if(localStorage.getItem('theme') === 'dark'){
    let body = document.getElementById('body')
    body.classList.add('dark-mode')
    flag = 0;
}

let hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', showMenu)

let closeBtn = document.getElementById('mobile-menu-close')
closeBtn.addEventListener('click', hideMenu)

let mobileMenuList = document.getElementById('mobile-menu-list')
mobileMenuList.addEventListener('click', hideMenu)

function showMenu() {
    let mobileMenu = document.getElementById("mobile-menu")
    mobileMenu.style.display = 'flex'
}

function hideMenu() {
    let mobileMenu = document.getElementById('mobile-menu')
    mobileMenu.style.display = 'none'
}

let theme = document.getElementById('menu__item-sun')
theme.addEventListener('click', darkMode)

let theme2 = document.getElementById('mobile-menu-list-sun')
theme2.addEventListener('click', darkMode)

function darkMode() {
    let body = document.getElementById('body')
    body.classList.toggle('dark-mode')

    if(flag === 1){
        localStorage.setItem('theme', 'dark')
        flag = 0
    } else {
        localStorage.setItem('theme', 'light')
        flag = 1
    }
}