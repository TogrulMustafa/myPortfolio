
// Header starts

window.addEventListener('scroll', _ => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const menuBTN = document.querySelector('.nav-menu-btn')
const closeBTN = document.querySelector('.nav-close-btn')
const navigation = document.querySelector('.navigation')
const navItems = document.querySelectorAll('nav-items a')

menuBTN.addEventListener('click', _ => {
    navigation.classList.add('active')
})
navigation.addEventListener('click', _ => {
    navigation.classList.remove('active')
})
closeBTN.addEventListener('click', _ => {
    navigation.classList.remove('active')
})
navItems.forEach((navItem) => {
    navItem.addEventListener('click', _ => {
        navigation.classList.remove('active')
    })
})

// Header ends