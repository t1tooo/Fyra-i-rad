Feature: Make Moves after Win Message
  Scenario: Players enter names and play the game. Player X wins. But they try to click and make more moves
    Given I visit the Tic-Tac-Toe game page
    When the players start the game
    Then Player X wins the game
    Then Player O clicks to make a move in a cell out of bounds
    Then Player X clicks to make a move in an occupied square