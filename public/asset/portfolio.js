console.log('JS is connected')

// closes the mobile menu after clicking anchor link
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNavAltMarkup')
const bsCollapse = new bootstrap.Collapse(menuToggle, ({toggle: false}))
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

