/* ------------------- Navbar ---------------- */

ScrollReveal().reveal('.logo', {
    delay: 200, 
    origin: 'left', 
    distance: '50px', 
    easing: 'ease-in-out', 
});

ScrollReveal().reveal('#menu-icon', {
    delay: 400,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.navbar a', {
    delay: 400,
    interval: 100,  
    origin: 'bottom',  
    distance: '50px',
    easing: 'ease-in-out',
});


// ------  For all of therm  ------- // 

ScrollReveal({
    distance: '80px',
    duration: 1000,
    delay: 200
  });

// Apply animations
ScrollReveal().reveal('.home-content, .head-about', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .services-container, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
