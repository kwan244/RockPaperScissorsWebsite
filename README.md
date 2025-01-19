# RockPaperScissorsWebsite
<img src="images/HTML_JS_CSS.png">

**RockPaperScissorsWebsite** is simple web-based Rock, Paper, Scissors game that allows players to play against a computer. The game includes multiple difficulty levels, score tracking, and game resets. It uses local storage to save game progress, including the score, round number, and difficulty.

## Key Features
- **Rock, Paper, Scissors Gameplay**: Players can choose between rock, paper, or scissors to compete against the computer.
- **Difficulty Levels**: Choose from three difficulty levels: Easy, Medium, and Hard.
- **Score Tracking**: Tracks wins, losses, and ties across multiple rounds.
- **Player Preferences**: Tracks player preferences (e.g., how often each move is chosen) and adapts the game accordingly.
- **Local Storage**: Saves the game progress, score, round number, and difficulty level in the browser's local storage.
- **Game Reset**: Resets the score and preferences at any time.

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge).
- No installation required; simply clone or download the repository and open the `index.html` file in your browser.

### How to Play
1. **Select Difficulty**: Choose a difficulty level by clicking one of the difficulty buttons (Easy, Medium, Hard).
2. **Make a Move**: Click one of the options (Rock, Paper, or Scissors) to make your move.
3. **Game Results**: The result of each round (Win, Lose, or Tie) will be displayed, along with the current score.
4. **Reset the Game**: Click the "Reset Game" button to reset the score and player preferences.

### Local Storage
- The game uses local storage to save your progress, including:
  - Score: Tracks wins, losses, and ties.
  - Round Number: Tracks the current round number.
  - Difficulty Level: Saves the selected difficulty level.
  - Player Preferences: Saves how often the player chooses each move (Rock, Paper, or Scissors).
- You can clear this data at any time by clicking the "Reset Game" button, which removes the stored information.

## File Structure
- /images
    - images for each move (rock, paper, scissors) as emojis
- /index.html
    - The main HTML file for the game
- /styles/index.css
    - The CSS file for styling the game interface
- /scripts/index.js
    - The JavaScript file for game logic and functionality
- README.md
    - This README file
- .gitignore
    - A file to specify which files and directories to ignore by Git
- LICENSE
    - A file to specify the terms under which the code can be used, modified, and distributed

## How to Customize
- **Difficulty Logic**: The game's difficulty levels can be customized in the `index.js` file. You can adjust how the computer chooses its moves based on the selected difficulty.
- **Styling**: Modify the `index.css` file to change the appearance of the game.
- **Images**: Add or modify the images for Rock, Paper, and Scissors in the `/images` directory.

## Technologies Used
- **HTML**: For structuring the game interface.
- **CSS**: For styling the game layout and design.
- **JavaScript**: For the game logic, player interactions, and local storage handling.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- This game was inspired by the classic Rock, Paper, Scissors game.
- Special thanks to the community for providing open-source resources for web development.