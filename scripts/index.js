        // Store the score in local storage or set it to inital values
        let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0, tries: 0 };
        // update the score on the page
        updateScore();

        // Function to play the game
        function playGame(playerMove) {
            // Get the computer move
            const computerMove = pickComputerMove();
            
            // Compare the moves and get the result
            if(playerMove === 'Scissors') {
                if (computerMove === 'Rock') {
                    result = 'You lose.';
                } else if (computerMove === 'Paper') {
                    result = 'You win.';
                } else {
                    result = 'Tie.';
                }

            } else if (playerMove === 'Paper') {
                if (computerMove === 'Rock') {
                    result = 'You win.';
                } else if (computerMove === 'Paper') {
                    result = 'Tie.';
                } else {
                    result = 'You lose.';
                }

            } else {
                if (computerMove === 'Rock') {
                    result = 'Tie.';
                } else if (computerMove === 'Paper') {
                    result = 'You lose.';
                } else {
                    result = 'You win.';
                }
            }

            // Update the score
            if (result === 'You win.') {
                score.wins++;
            } else if (result === 'You lose.') {
                score.losses++;
            } else {
                score.ties++;
            }

            // Increment the number of tries
            score.tries++;
            
            // Update the score in local storage
            localStorage.setItem('score', JSON.stringify(score));

            // Update the score on the page
            updateScore();
            // Update the result on the page
            document.querySelector('.js-results').textContent = result;
            // Update the moves on the page
            document.querySelector('.js-moves').innerHTML = `Player move:
            <img src="images/${playerMove.toLowerCase()}-emoji.png" class="move-icon">
            Computer move:
            <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">`;

            console.log(computerMove);
        }

        function pickComputerMove() {
            // moves list to choose from
            const moves = ['Rock', 'Paper', 'Scissors'];
            // pick a random index
            const randomIndex = Math.floor(Math.random() * moves.length);
            // return the move at that index
            return moves[randomIndex];
        }

        function updateScore() {
            // Update the score on the page
            document.querySelector('.js-score').textContent = `Player Score: ${score.wins} Computer Score: ${score.losses} Ties: ${score.ties} Total Tries: ${score.tries}`;
        }