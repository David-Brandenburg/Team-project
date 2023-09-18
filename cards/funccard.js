
        let currentOpenCard = null;
        
        function toggleCard(cardNumber) {
            const clickedDescription = document.querySelector('.card:nth-child(' + cardNumber + ') .description');
            
            if (currentOpenCard === clickedDescription) {
                // if clicked card is already open, close this
                clickedDescription.style.display = 'none';
                currentOpenCard = null; // no card is open now
            } else {
                // close any previously opened card if open
                if (currentOpenCard) {
                    currentOpenCard.style.display = 'none';
                }
        
                // open clicked card
                clickedDescription.style.display = 'block';
                currentOpenCard = clickedDescription; // set current open card
            }
        }