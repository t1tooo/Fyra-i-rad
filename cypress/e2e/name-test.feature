Feature: Name Display/Test
  Scenario: Players enter names and play the game
    Given I visit the Tic-Tac-Toe game page
    Then Player X inserts the name Thomas
    Then Player O inserts the name Tito
    Then It should say Thomas turn