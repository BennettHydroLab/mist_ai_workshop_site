// Workshop Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update registration form link when Google Form is available
    const registrationLink = document.getElementById('registration-link');
    
    // Function to update the combined registration/abstract form link
    function updateRegistrationFormLink(formUrl) {
        if (formUrl) {
            registrationLink.href = formUrl;
            registrationLink.nextElementSibling.textContent = 'Click to register (abstract submission optional)';
        }
    }
    
    // Example usage (uncomment and update with actual Google Form URL):
    // updateRegistrationFormLink('https://forms.google.com/your-combined-form-id');

    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navItems = document.querySelectorAll('.nav-menu a[href^="#"]');
        const headerHeight = document.querySelector('header').offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });
});