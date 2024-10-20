Feature: Win Message
  Scenario: Players enter names and play the game. Player X wins
    Given I visit the Tic-Tac-Toe game page
    When the players start the game
    Then Player X wins the game
