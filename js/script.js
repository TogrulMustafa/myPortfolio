
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

portfolioModals.forEach((portfolioModal) => {
    portfolioModal.addEventListener('click', _ => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove('active')
        })
    })
})

// Portfolio ends


// Get-In-Touch starts


let swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Get-In-Touch ends





const scrollTopBtn = document.querySelector('.scrollToTop-btn')
const scrollDownBtn = document.querySelector('.scroll-down')

window.addEventListener('scroll', _ => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 500)
    scrollTopBtn.classList.toggle('passive', window.scrollY > 6345)
    // ?6345
    // Sehv yazmisam telefon ekranlarinda ise yaramir 
})

scrollTopBtn.addEventListener('click', _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // ?Niye yalniz body ile yazanda islemir?
})
scrollDownBtn.addEventListener('click', _ => {
    let body = document.querySelector('body')
    let home = document.querySelector('.home')
    let homeHeight = home.offsetHeight
    let bodyHeight = body.offsetHeight
    document.body.scrollTo(homeHeight, bodyHeight)
    document.documentElement.scrollTo(homeHeight, bodyHeight)
    // ?Basqa cur nece ede bilerem saytin en sonuna getmek ucun?
    // Burda da yene telefon ekranlarinda islemir
})




/* 
1.pageYOffset- vertical olaraq window-nun 0px-den scroll-u hereket etdirib mueyyen yerde dayandigimiz yere qeder ki mesafeni teyin edir.
2.offsetHeight- hansi elemente verilibse,onun height-nin,padding-top ve padding-bottom-nun,border-top ve border-bottom-nun cemidir(Margin daxil deyil).
3.offsetTop- hansi elemente verilibse,onun ana elementi ile onun arasindaki mesafewni teyin edir.Bu mesafeye ovlad elemente verilen top ve margin-top,ana elemente verilen padding-top ve border-top daxildir.
4.(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)- scrollY xetti sectionun yuxari ve asagi serheddi daxilinde oldugu muddetce hemin sectione active classi tetbiq edilsin serheddi asan kimi
   active classi hemin sectiondan silinib novbeti sectiona elave edilsin cunki onun serheddine girmisik.
5.
*/


window.addEventListener('scroll', _ => {
    let sections = document.querySelectorAll('section')
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50
        let id = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-items a[href*=${id}]`).classList.add('active')
        } 
        else {
            document.querySelector(`.nav-items a[href*=${id}]`).classList.remove('active')
        } 
    })   
})







ScrollReveal({ 
    reset: true,
    distance: '30px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, section-title-02', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li, .scroll-down', {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval: 200});














// window.addEventListener('scroll', _ => {
//     let header = document.querySelector('header')
//     let home = document.querySelector('.home')
//     let about = document.querySelector('.about')
//     let skills = document.querySelector('.skills')
//     let services = document.querySelector('.services')
//     let portfolio = document.querySelector('.portfolio')
//     let contact = document.querySelector('.contact')
//     let footer = document.querySelector('footer')
//     let body = document.querySelector('body')

    
//     let scrollY = window.pageYOffset
//     let toptobtn = document.querySelector('.toptobtn')


//     toptobtn.innerHTML = scrollY + '<br>' + about.offsetTop + '<br>' + about.offsetHeight
// })
