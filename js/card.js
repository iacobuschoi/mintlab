document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    visibleCards = 3;
    lastVisibleCards = 3;
    if(window.innerWidth<480){
        visibleCards = 1;
    }
    else if(window.innerWidth<768){
        visibleCards = 2;
    }
    let currentIndex = 0;

    window.addEventListener('resize',()=>{
        
        if(window.innerWidth<480){
            lastVisibleCards = visibleCards;
            visibleCards = 1;
        }
        else if(window.innerWidth<768){
            lastVisibleCards = visibleCards;
            visibleCards = 2;
        }
        else{
            lastVisibleCards = visibleCards;
            visibleCards = 3;
        }
        if(lastVisibleCards != visibleCards){
            updateCards();
        }
    })
    // Function to update the displayed cards based on the current index with animation
    function updateCards(direction) {
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + visibleCards) {
                card.style.display = 'flex'; // Show card
                card.style.opacity = '1';
            } else {
                card.style.display = 'none'; // Hide the other cards
            }
        });

        updateIndicator(); // Update the visual indicator in the bottom section
    }

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
    setInterval(()=>{
        if(currentIndex + visibleCards < totalCards){
            currentIndex+=1;
            updateCards('right');
        }
        else{
            currentIndex = 0;
            updateCards();
        }
    },4000)

    updateCards();
});

