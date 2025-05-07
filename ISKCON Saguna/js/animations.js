// Function to add scroll-triggered animations
const scrollTriggeredElements = document.querySelectorAll('.scroll-triggered');

const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1 // Trigger when 10% of the element is visible
};

// Callback function for the Intersection Observer
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add active class to trigger animation
            observer.unobserve(entry.target); // Stop observing once the animation has been triggered
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each scroll-triggered element
scrollTriggeredElements.forEach(element => {
    if (element) {
        observer.observe(element);
    }
});

// Example of adding a bounce effect to the logo on click
const logo = document.querySelector('.navbar-brand img');

if (logo) {
    logo.addEventListener('click', function() {
        logo.classList.add('bounce');
        setTimeout(() => {
            logo.classList.remove('bounce'); // Remove bounce class after animation
        }, 500); // Duration of the bounce animation
    });
}