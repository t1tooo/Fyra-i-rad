Feature: Restart Feature
  Scenario: Players enter names and play the game. Player X wins and players restart the game
    Given I visit the Tic-Tac-Toe game page
    When the players start the game
    Then Player X wins the game
    Then It should say play again
    Then It should say Its Titos turn to start!