// Toggle menu function
function toggleMenu(hamburger) {
    hamburger.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
}

// Close menu when clicking on a link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.getElementById('nav-menu').classList.remove('active');
        document.body.style.overflow = '';
    });
});


window.addEventListener('DOMContentLoaded', (event) => {
    // Get the current page URL (the part after the domain)
    const currentPage = window.location.pathname.split('/').pop(); // Get the last part of the URL

    // Select all navigation links
    const navLinks = document.querySelectorAll('#nav-links a');

    // Loop through the links and add the 'active' class to the corresponding link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop(); // Get the last part of the link href

        // If the href matches the current page, add the 'active' class
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
});


