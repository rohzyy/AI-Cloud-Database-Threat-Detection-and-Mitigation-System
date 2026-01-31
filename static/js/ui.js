/**
 * VibeCraft Premium UI Effects
 * Handles global interactions like the "Spotlight" mouse tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Spotlight Effect
    const initSpotlight = () => {
        const cards = document.querySelectorAll('.spotlight-card, .glass-panel');
        cards.forEach(card => {
            // Remove existing listener to be safe? JS handling of dupes is fine usually if distinct functions, 
            // but here we just add new ones. 
            // To prevent double binding if this runs twice, we could check a flag, but for now it's simple.
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });
    };

    initSpotlight();

    // Re-init on dynamic content changes (Observer could be better but this is a simple fallback)
    // For now, dynamic elements needs to trigger this or add their own listeners.
});
