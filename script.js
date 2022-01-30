
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



let tog = (togClick) => {
    serviceModals[togClick].classList.remove('active')
}
modalCloseBtns.forEach((modalCloseBtn, i) => {
    modalCloseBtn.addEventListener('click', _ => {
        tog(i)
    })
})


let nah = (nahClick) => {
    serviceModals[nahClick].classList.remove('active')
}
serviceModals.forEach((serviceModal, i) => {
    serviceModal.addEventListener('click', _ => {
        nah(i)
    })
})


// Services end

// Portfolio starts

const portfolioModals = document.querySelectorAll('.portfolio-model')
const imgCards = document.querySelectorAll('.img-card')
const portfolioCloseBtns = document.querySelectorAll('.portfolio-close-btn')

let portfolioModal = (modalClick) => {
    portfolioModals[modalClick].classList.add('active')
}
imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener('click', _ => {
        portfolioModal(i)
    })
})
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener('click', _ => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove('active')
        })
    })
})

// Portfolio ends