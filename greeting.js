// This script adds some extra animation to the greeting page
// Add this to a file named 'greeting.js' and add a script tag to include it at the end of the greeting HTML

document.addEventListener('DOMContentLoaded', function() {
    // Create flying hearts when the button is hovered
    const enterButton = document.querySelector('.enter-button');
    const buttonHearts = document.querySelector('.button-hearts');
    
    enterButton.addEventListener('mouseover', function() {
        // Clear existing hearts
        buttonHearts.innerHTML = '';
        
        // Create new hearts
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('span');
            heart.textContent = '♥';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
            heart.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
            heart.style.setProperty('--r', (Math.random() * 360) + 'deg');
            buttonHearts.appendChild(heart);
        }
    });
    
    // Add a subtle entrance animation for the whole card
    const greetingCard = document.querySelector('.greeting-card');
    greetingCard.style.opacity = '0';
    greetingCard.style.transform = 'translateY(20px)';
    
    setTimeout(function() {
        greetingCard.style.transition = 'opacity 1s ease, transform 1s ease';
        greetingCard.style.opacity = '1';
        greetingCard.style.transform = 'translateY(0)';
    }, 100);
    
    // Create random floating hearts in the background
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.opacity = Math.random() * 0.5 + 0.1;
        heart.style.transform = 'rotate(-45deg) scale(' + (Math.random() * 0.6 + 0.4) + ')';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heartsContainer.appendChild(heart);
    }
});