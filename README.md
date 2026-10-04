# Sudoku Game

A simple Sudoku game made using HTML, CSS and JavaScript.

The project creates a 9×9 Sudoku board where some numbers are already given and the remaining cells can be filled by the player. The entered numbers are checked while playing to make sure they don't repeat in the same row, column or 3×3 box.

## Features

* 9×9 Sudoku board
* Pre-filled numbers cannot be changed
* Allows the player to enter numbers from 1 to 9
* Checks numbers entered by the player
* Detects duplicate numbers in:

  * Same row
  * Same column
  * Same 3×3 box
* Invalid entries are highlighted
* Reset button to start the puzzle again
* Simple and clean interface

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
Sudoku-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the basic structure of the game. It includes the Sudoku heading, the board container and the Reset button. The CSS and JavaScript files are also linked here.

### style.css

Used for designing the Sudoku board and the page. It creates the 9×9 grid, styles the cells and inputs, highlights pre-filled cells and shows invalid entries.

### script.js

Contains the main game logic. It creates the Sudoku board from the puzzle data and checks the values entered by the player.

## How It Works

When the page is opened, JavaScript creates the Sudoku board using the puzzle given in the code.

The numbers that are already present in the puzzle are disabled so that the player cannot change them.

For empty cells, the player can enter a number. Whenever a number is entered, the program checks whether the same number already exists in the corresponding row, column or 3×3 box.

If the number conflicts with another number, the cell is marked as invalid.

The Reset button recreates the original puzzle.

## How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any modern web browser.
4. Start solving the Sudoku.

No additional installation or setup is required.

## Future Improvements

Some features I would like to add in the future:

* Multiple Sudoku puzzles
* Difficulty levels
* Sudoku completion detection
* Timer
* Score system
* New Game button
* Better mobile responsiveness
* Highlighting the selected row, column and 3×3 box

## Author

**Hardhik Kavali**

This project was created as a simple web development project to practice HTML, CSS and JavaScript.
