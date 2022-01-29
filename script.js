
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

// Services start

const serviceModals = document.querySelectorAll('.service-modal')
const learnmoreBtns = document.querySelectorAll('.learn-more-btn')
const modalCloseBtns = document.querySelectorAll('.modal-close-btn')

let modal = (modalClick) => {
    serviceModals[modalClick].classList.add('active')
}
learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener('click', _ => {
        modal(i)
    })
})
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener('click', _ => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove('active')
        })
    })
})

// Services end