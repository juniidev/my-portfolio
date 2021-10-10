// show menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// Active and remove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ================ Scroll Reveal Animation ==========
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// ==== Scroll Home
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

// ==== Scroll About 
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

// ==== Scroll Skills 
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 400 })

// ==== Scroll Work 
sr.reveal('.work__img', { interval: 200 })

// ==== Scroll Contact 
sr.reveal('.contact__input', { interval: 200 })

// ==== Scroll Labels
sr.reveal('.labels__scroll', { interval: 200 })

// ================ Scroll Top ====================
const scrollTop = document.querySelector('.scroll__top');

scrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

// ================ Form Settings ==========

/* const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trik')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:hms745@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
} */

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarme, te escribiré pronto :)')
    }
}