        // Store the score in local storage or set it to inital values
        let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0};
        // update the score on the page
        updateScore();
        let roundNumber = JSON.parse(localStorage.getItem('roundNumber')) || 1;
        let difficulty = JSON.parse(localStorage.getItem('difficulty')) || 'easy';
        // update the difficulty on the page
        updateDifficulty(difficulty);

        // Reset the game
        function resetGame() {
            // Reset the score
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            roundNumber = 1;
            localStorage.removeItem('score'); 
            localStorage.removeItem('roundNumber');
            updateScore();
        }

        // Change the difficulty
        function changeDifficulty(selectedDifficulty) {
            // Update the difficulty in local storage
            localStorage.setItem('difficulty', JSON.stringify(selectedDifficulty));
            document.querySelectorAll('.difficulty-button').forEach(btn => btn.classList.remove('active'));
            // Update the difficulty on the page
            updateDifficulty();
            resetGame();
        }

        function updateDifficulty(selectedDifficulty) {
            // Update the difficulty on the page
            if (selectedDifficulty === 'easy') {
                document.querySelector('.difficulty-button.easy').classList.add('active');
            } else if (selectedDifficulty === 'medium') {
                document.querySelector('.difficulty-button.medium').classList.add('active');
            } else if (selectedDifficulty === 'hard') {
                document.querySelector('.difficulty-button.hard').classList.add('active');
            }
        }

        // Function to play the game
        function playGame(playerMove) {
            // Set variables
            let difficulty = JSON.parse(localStorage.getItem('difficulty')) || 'easy';
            let computerMove = "";

            // if difficulty is easy
            if (difficulty === 'easy'){
                document.querySelector('.difficulty-button.easy').classList.add('active');
                // Get the computer move
                computerMove = pickComputerMoveEasy();
            } else if (difficulty === 'medium') {
                // Get the computer move
                computerMove = pickComputerMovemedium();
            } else {
                // Get the computer move
                computerMove = pickComputerMoveHard();
            }
            
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
            
            // Update the round number
            roundNumber++;
            localStorage.setItem('roundNumber', JSON.stringify(roundNumber));
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
        }

        function pickComputerMoveEasy() {
            // moves list to choose from
            const moves = ['Rock', 'Paper', 'Scissors'];
            // pick a random index
            const randomIndex = Math.floor(Math.random() * moves.length);
            // return the move at that index
            return moves[randomIndex];
        }

        function pickComputerMovemedium() {
            // moves list to choose from
            const moves = ['Rock', 'Paper', 'Scissors'];
            // pick a random index
            const randomIndex = Math.floor(Math.random() * moves.length);
            // return the move at that index
            return moves[randomIndex];
        }

        function pickComputerMoveHard() {
            // moves list to choose from
            const moves = ['Rock', 'Paper', 'Scissors'];
            // pick a random index
            const randomIndex = Math.floor(Math.random() * moves.length);
            // return the move at that index
            return moves[randomIndex];
        }

        function updateScore() {
            // Update the score on the page
            document.querySelector('.js-score').textContent = `Player Score: ${score.wins} Computer Score: ${score.losses} Ties: ${score.ties}`;
        }