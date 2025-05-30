 function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart-explosion';
    heart.textContent = '❤';
    
    // Create a downward spreading pattern
    const angleSpread = 60; // Degrees from center
    const baseAngle = 270; // Point down
    const angle = baseAngle + (Math.random() * angleSpread * 2 - angleSpread);
    const distance = 100 + Math.random() * 200;
    
    // Calculate final position using angle and distance
    const tx = Math.cos(angle * Math.PI / 180) * distance;
    const ty = Math.sin(angle * Math.PI / 180) * distance;
    
    heart.style.setProperty('--tx', `${tx}px`);
    heart.style.setProperty('--ty', `${ty}px`);
    heart.style.setProperty('--rotate', `${Math.random() * 720 - 360}deg`);
    
    // Set initial position
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
}

function startHeartExplosion() {
    const gift = document.querySelector('.gift');
    const rect = gift.getBoundingClientRect();
    
    // Calculate position above the gift box
    const centerX = rect.left + rect.width / 2;
    const startY = rect.top;
    
    // Create hearts in a burst
    const heartCount = 40;
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            // Calculate random angle in the lower 180 degrees (downward spread)
            const angle = (Math.random() * 180 + 180) * (Math.PI / 180);
            const distance = 50 + Math.random() * 150;
            
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            createHeart(centerX, startY);
        }, i * 40); // Faster stagger for more burst-like effect
    }
}

function openGift() {
    const gift = document.querySelector('.gift');
    const container = document.querySelector('.gift-container');
      // Add opening animation
    gift.classList.add('open');
    
    // Start heart explosion after a short delay
    setTimeout(() => {
        startHeartExplosion();
    }, 500);
    
    // Add a slight bounce effect
    setTimeout(() => {
        gift.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            gift.style.transform = 'translateY(0)';
        }, 200);
    }, 300);
    
    // Fade out the entire container
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease-out';
        container.style.opacity = '0';
    }, 1500);
    
    // Redirect to main page
    setTimeout(() => {
        window.location.href = 'index_principal.html';
    }, 3000);
        }