// ========== CONFIGURATION ==========
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycby_NuDLU4gq87JJQOPHPxaoG5i-DpU4QNcNKq4MVGIYjDR8cg7Bzw_RoTUSgzhQSC0V/exec';

// ========== LOADER ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
});

// ========== CUSTOM CURSOR ==========
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
});

// ========== MOBILE MENU ==========
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========== NAVBAR HIDE ON SCROLL DOWN / SHOW ON SCROLL UP ==========
const scrollTopBtn = document.getElementById('scrollTop');
const marqueeEl   = document.getElementById('topMarquee');
const siteHeader  = document.querySelector('.site-header');

let lastScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const nav = document.getElementById('nav');

            // Nav glass effect
            if (scrollY > 60) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');

            // Hide marquee after 60px
            if (marqueeEl) {
                marqueeEl.classList.toggle('hidden', scrollY > 60);
            }

            // Hide header on scroll down, show on scroll up
            if (siteHeader) {
                if (scrollY > lastScrollY && scrollY > 120) {
                    // Scrolling DOWN — hide
                    siteHeader.style.transform = 'translateY(-100%)';
                    siteHeader.style.transition = 'transform 0.35s ease';
                } else {
                    // Scrolling UP — show
                    siteHeader.style.transform = 'translateY(0)';
                }
            }

            // Scroll-to-top FAB
            if (scrollTopBtn) {
                scrollTopBtn.classList.toggle('visible', scrollY > 400);
            }

            lastScrollY = scrollY;
            ticking = false;
        });
        ticking = true;
    }
});

// ========== SMOOTH SCROLL ==========
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

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navLinks2 = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== REVEAL ANIMATIONS (fires ONCE per element) ==========
function reveal() {
    document.querySelectorAll('.reveal:not(.active)').forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 120) {
            const delay = element.dataset.delay;
            if (delay) element.style.transitionDelay = `${delay}s`;
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal, { passive: true });
reveal(); // run once on load

// ========== STATS COUNTER ANIMATION ==========
function animateCounter(el, target, duration) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        start += step;
        if (start >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(start);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-num').forEach(num => {
                const target = parseInt(num.dataset.target, 10);
                animateCounter(num, target, Math.min(1800, target * 8));
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);


// ========== HERO CANVAS ANIMATION ==========
const canvas = document.getElementById('heroCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    
    function setDimensions() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    setDimensions();
    
    window.addEventListener('resize', setDimensions);
    
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(200, 161, 101, ${Math.random() * 0.5})`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > width) p.speedX *= -1;
            if (p.y < 0 || p.y > height) p.speedY *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// ========== FORM SUBMISSION WITH GOOGLE APPS SCRIPT ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn') || contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Get form data
        const formData = {
            type: 'contact_form',
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company')?.value || '',
            message: document.getElementById('message').value
        };
        
        // Validate email
        if (!validateEmail(formData.email)) {
            showFormMessage(contactForm, 'Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            await fetch(FORM_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            // Show success message
            showFormMessage(contactForm, 'Thank you for reaching out! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Error:', error);
            showFormMessage(contactForm, 'Something went wrong. Please email us at hello@optivra.in', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// ========== FORM VALIDATION ==========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========== FORM MESSAGE DISPLAY ==========
function showFormMessage(form, message, type) {
    // Remove existing messages
    const existingMsg = form.querySelector('.form-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 10px;
        text-align: center;
        font-weight: 500;
        background: ${type === 'success' ? 'rgba(200, 161, 101, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
        color: ${type === 'success' ? 'var(--gold)' : '#ff0000'};
        border: 1px solid ${type === 'success' ? 'var(--gold)' : '#ff0000'};
    `;
    messageDiv.textContent = message;
    
    form.appendChild(messageDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.3s';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// ========== CAREERS MODAL ==========
const careersOverlay = document.getElementById('careersModalOverlay');

function openCareersModal() {
    if (careersOverlay) {
        careersOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCareersModal() {
    if (careersOverlay) {
        careersOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (careersOverlay) {
    careersOverlay.addEventListener('click', (e) => {
        if (e.target === careersOverlay) closeCareersModal();
    });
}

// ========== MARQUEE SCROLL BEHAVIOR ==========

const topMarquee = document.getElementById('topMarquee');
if (topMarquee) {
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            topMarquee.style.transform = 'translateY(-100%)';
            topMarquee.style.transition = 'transform 0.3s';
        } else {
            topMarquee.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
}

// ========== SHOWCASE MODAL ==========
const showcaseProducts = [
    {
        title: 'AI Analytics Platform',
        badge: 'AI Powered',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
        description: 'Our AI Analytics Platform leverages cutting-edge machine learning algorithms to provide real-time business intelligence. Transform raw data into actionable insights with predictive analytics, anomaly detection, and automated reporting. Built for enterprise-scale data processing with intuitive dashboards.',
        features: ['Machine Learning', 'Real-time Analytics', 'Predictive Insights', 'Auto Reports', 'Custom Dashboards', 'API Integration']
    },
    {
        title: 'Smart Automation Suite',
        badge: 'Automation',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
        description: 'End-to-end workflow automation that reduces manual tasks by 80%. Our Smart Automation Suite integrates with your existing tools to streamline operations, automate repetitive processes, and free your team to focus on high-value work. From document processing to customer service automation.',
        features: ['Workflow Builder', 'RPA Integration', 'Document AI', 'Chatbot Engine', 'Process Mining', 'Scalable Cloud']
    },
    {
        title: 'Data Visualization Engine',
        badge: 'Data Science',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        description: 'Transform complex datasets into stunning, interactive visual dashboards. Our Data Visualization Engine supports real-time data streaming, multi-source integration, and collaborative analysis. Create publication-ready charts and share insights across your organization instantly.',
        features: ['Interactive Charts', 'Real-time Streaming', 'Multi-source Data', 'Collaboration', 'Export & Share', 'Custom Themes']
    }
];

const modalOverlay = document.getElementById('showcaseModalOverlay');
const modalClose = document.getElementById('showcaseModalClose');

function openShowcaseModal(index) {
    const product = showcaseProducts[index];
    if (!product || !modalOverlay) return;

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.title;
    document.getElementById('modalBadge').textContent = product.badge;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    
    const featuresEl = document.getElementById('modalFeatures');
    featuresEl.innerHTML = product.features.map(f => `<span>${f}</span>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeShowcaseModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeShowcaseModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeShowcaseModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeShowcaseModal();
        closeCareersModal();
    }
});

// ========== SHOWCASE FORM SUBMISSION ==========
const showcaseForm = document.getElementById('showcaseForm');
if (showcaseForm) {
    showcaseForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = showcaseForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        const formData = {
            type: 'product_inquiry',
            product: document.getElementById('modalTitle')?.textContent || '',
            name: showcaseForm.querySelector('[name="modalName"]').value,
            email: showcaseForm.querySelector('[name="modalEmail"]').value,
            phone: showcaseForm.querySelector('[name="modalPhone"]').value,
            budget: showcaseForm.querySelector('[name="modalBudget"]').value
        };
        
        if (!validateEmail(formData.email)) {
            showFormMessage(showcaseForm, 'Please enter a valid email address', 'error');
            return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            await fetch(FORM_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            showFormMessage(showcaseForm, 'Thank you for your interest! We\'ll reach out to you soon.', 'success');
            showcaseForm.reset();
        } catch (error) {
            console.error('Error:', error);
            showFormMessage(showcaseForm, 'Something went wrong. Please email us at hello@optivra.in', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Made with Bob

