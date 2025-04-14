// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Sticky Header
window.onscroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Close menu when clicking on nav links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Security Analyst', 'Penetration Tester', 'Ethical Hacker', 'Security Architect'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content h2, .about-content h3', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .services-container, .skills-container, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content p', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content .certifications', { origin: 'right' });

// Form Submission
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = formData.get('Full Name');
    const email = formData.get('Email Address');
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Project Filter (could be expanded)
const projectBoxes = document.querySelectorAll('.project-box');
projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.querySelector('img').style.transform = 'scale(1)';
    });
});

// Skill Bar Animation
const skillBars = document.querySelectorAll('.bar-line span');
window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const skillValue = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        bar.style.width = skillValue;
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});