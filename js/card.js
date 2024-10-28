document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3;
    let currentIndex = 0;

    // Function to update the displayed cards based on the current index with animation
    function updateCards(direction) {
        // Hide the first/last card with fade-out animation
        if (direction === 'left') {
            const firstCard = cards[currentIndex];
            firstCard.style.opacity = '0';
            setTimeout(() => {
                firstCard.style.display = 'none';
            }, 500); // Wait for the fade-out animation to complete (0.5s)
        } else if (direction === 'right') {
            const lastVisibleCardIndex = (currentIndex + visibleCards - 1) % totalCards;
            const lastCard = cards[lastVisibleCardIndex];
            lastCard.style.opacity = '0';
            setTimeout(() => {
                lastCard.style.display = 'none';
            }, 500);
        }

        // Show the new set of cards after a delay for the fade-out to complete
        setTimeout(() => {
            cards.forEach((card, index) => {
                if (index >= currentIndex && index < currentIndex + visibleCards) {
                    card.style.display = 'flex'; // Show card
                    card.style.opacity = '0'; // Start with opacity 0
                    setTimeout(() => {
                        card.style.opacity = '1'; // Fade in
                    }, 50); // Add slight delay for smooth transition
                } else {
                    card.style.display = 'none'; // Hide the other cards
                }
            });
        }, 500); // Delay to synchronize with fade-out

        updateIndicator(); // Update the visual indicator in the bottom section
    }

    // Left button click: shift cards to the left with animation
    document.querySelector('.card-section-side:first-child button').addEventListener('click', () => {
        if(currentIndex>0){
                currentIndex -= 1;
                updateCards('left');
            }
    });

    
    document.querySelector('.card-section-side:last-child button').addEventListener('click', () => {
        if(currentIndex<totalCards-visibleCards){
            currentIndex += 1; 
            updateCards('right');
        } 
    });

    function updateIndicator() {
        const bottomContainer = document.querySelector('.bottom');
        bottomContainer.innerHTML = ''; 

        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('span');
            dot.className = 'indicator-dot';
            dot.style.display = 'inline-block';
            dot.style.width = '10px';
            dot.style.height = '10px';
            dot.style.margin = '5px';
            dot.style.borderRadius = '50%';
            dot.style.backgroundColor = (i >= currentIndex && i < currentIndex + visibleCards) ? 'black' : 'lightgray';
            bottomContainer.appendChild(dot);
        }
    }

    updateCards();
});
