const toggle_icon = document.getElementsByClassName('icon')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggle_icon.addEventListener('click', (e) => {
    // e.preventDefault();
    navLinks.classList.toggle('active');
})