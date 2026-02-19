// ===========================================
// NAME GAIN — Scripts
// MarketVision × Atlas
// ===========================================

// ===========================================
// NAVIGATION — Scroll state
// ===========================================
(function () {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('hamburger');
    const navCenter = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    if (hamburger && navCenter) {
        hamburger.addEventListener('click', () => {
            navCenter.classList.toggle('mobile-open');
        });
        navCenter.querySelectorAll('.nav-link').forEach(link =>
            link.addEventListener('click', () => navCenter.classList.remove('mobile-open'))
        );
    }
})();

// ===========================================
// SMOOTH SCROLL
// ===========================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const el = document.querySelector(id);
        if (el) {
            e.preventDefault();
            window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
        }
    });
});

// ===========================================
// SCROLL REVEAL
// ===========================================
(function () {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => observer.observe(el));
})();

// ===========================================
// HORIZONTAL BAR CHART ANIMATION
// ===========================================
(function () {
    const bars = document.querySelectorAll('.chart-bar');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    bars.forEach(b => observer.observe(b));
})();

// ===========================================
// SCROLL PROGRESS BAR
// ===========================================
(function () {
    const bar = document.createElement('div');
    bar.id = 'progress-bar';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        bar.style.width = (window.scrollY / max * 100) + '%';
    });
})();

// ===========================================
// MAGNETIC HOVER — Primary buttons
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-pill, .btn-pill-outline').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width / 2) * 0.1;
            const y = (e.clientY - r.top - r.height / 2) * 0.1;
            btn.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
});
