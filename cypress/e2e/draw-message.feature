Feature: Draw Message
  Scenario: Players enter names and play the game. Its a tie
    Given I visit the Tic-Tac-Toe game page
    When the players run the game and it equals in a tie
    Then it should say its a tie