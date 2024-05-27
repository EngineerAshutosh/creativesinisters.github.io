// JavaScript for Animations using GSAP

document.addEventListener('DOMContentLoaded', () => {
    // Animation for navigation menu items
    gsap.from("nav ul li", {
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        y: -50, // Move vertically from -50 pixels
        stagger: 0.2 // Stagger the animation for each list item by 0.2 seconds
    });

    // Animation for hero section title
    gsap.from("header h1", {
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        y: 50 // Move vertically from 50 pixels
    });

    // Animation for "Do You Know" section
    gsap.from("#do-you-know", {
        scrollTrigger: "#do-you-know", // Trigger animation when #do-you-know is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        x: -100 // Move horizontally from -100 pixels
    });

    // Animation for poll section
    gsap.from("#poll", {
        scrollTrigger: "#poll", // Trigger animation when #poll is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        x: 100 // Move horizontally from 100 pixels
    });

    // Animation for news items
    gsap.from("#news .news-item", {
        scrollTrigger: "#news", // Trigger animation when #news is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        y: 50, // Move vertically from 50 pixels
        stagger: 0.2 // Stagger the animation for each news item by 0.2 seconds
    });

    // Animation for e-commerce products
    gsap.from("#e-commerce .product", {
        scrollTrigger: "#e-commerce", // Trigger animation when #e-commerce is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        scale: 0.8, // Start with 80% scale (shrink)
        stagger: 0.2 // Stagger the animation for each product by 0.2 seconds
    });

    // Animation for quizzes
    gsap.from("#quizzes .quiz", {
        scrollTrigger: "#quizzes", // Trigger animation when #quizzes is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        y: 50, // Move vertically from 50 pixels
        stagger: 0.2 // Stagger the animation for each quiz by 0.2 seconds
    });

    // Animation for characters
    gsap.from("#characters .character", {
        scrollTrigger: "#characters", // Trigger animation when #characters is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        y: 50, // Move vertically from 50 pixels
        stagger: 0.2 // Stagger the animation for each character by 0.2 seconds
    });

    // Animation for footer links
    gsap.from("footer ul li", {
        scrollTrigger: "footer", // Trigger animation when footer is in view
        duration: 1, // Animation duration of 1 second
        opacity: 0, // Start with 0 opacity (invisible)
        y: 50, // Move vertically from 50 pixels
        stagger: 0.2 // Stagger the animation for each footer link by 0.2 seconds
    });
});