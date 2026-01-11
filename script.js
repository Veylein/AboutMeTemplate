/* ===================================
   About Me Template - JavaScript
   Handles theme toggle and animations
   =================================== */

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // THEME TOGGLE FUNCTIONALITY
    // ===================================
    
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    // Handle theme toggle button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a little animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
    
    // Update the icon based on the theme
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // (Optional - if you add navigation links)
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // ===================================
    // ANIMATED ENTRANCE FOR CARDS
    // ===================================
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all interest cards and social links
    document.querySelectorAll('.interest-card, .social-link').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===================================
    // COPY TO CLIPBOARD (Optional Enhancement)
    // You can use this if you want a "copy email" button
    // ===================================
    
    // Example: Add this to any element with class "copy-button"
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });
    
    // ===================================
    // CONSOLE MESSAGE
    // A fun little easter egg for people who check the console
    // ===================================
    
    console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%cThanks for checking out my page!', 'font-size: 14px; color: #718096;');
    console.log('%cThis template is made with ❤️ for easy customization', 'font-size: 12px; color: #718096;');
    
});

/* ===================================
   CUSTOM FUNCTIONS
   Add your own JavaScript functions below!
   =================================== */

// You can add your own custom functions here
// Example ideas:
// - Add a visitor counter
// - Add a contact form
// - Add music player controls
// - Add image galleries
