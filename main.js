// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Once revealed, no need to observe again
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(10, 11, 16, 0.95)';
    } else {
        nav.style.padding = '1.5rem 0';
        nav.style.background = 'rgba(10, 11, 16, 0.8)';
    }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission Simulation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.disabled = true;
        btn.innerText = 'Initializing Secure Transmission...';
        
        setTimeout(() => {
            btn.style.background = '#28a745';
            btn.style.boxShadow = '0 0 20px rgba(40, 167, 69, 0.5)';
            btn.innerText = 'Protocol Accepted. We will contact you shortly.';
            
            contactForm.reset();
            
            setTimeout(() => {
                btn.style.background = '';
                btn.style.boxShadow = '';
                btn.innerText = originalText;
                btn.disabled = false;
            }, 5000);
        }, 1500);
    });
}

// Add subtle parallax effect to hero background
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg img');
    const scrolled = window.scrollY;
    if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(${1 + scrolled * 0.0005}) translateY(${scrolled * 0.2}px)`;
    }
});
