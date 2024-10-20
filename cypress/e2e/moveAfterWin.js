import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the Tic-Tac-Toe game page', () => {
  cy.visit("/"); 
});


When('the players start the game', () => {
  cy.wait(4000)
  cy.get('dialog').should('be.visible');
  cy.get('h2').contains('Enter the name of player X:');
  cy.get('input[name="answer"]').type('Thomas{enter}');

  cy.wait(4000)
  cy.get('dialog').should('be.visible');
  cy.get('h2').contains('Enter the name of player O:');
  cy.get('input[name="answer"]').type('Tito{enter}');

  cy.wait(4000)
  cy.get('main').should('contain', "X: Thomas' turn...");
  cy.get('.board .cell').eq(0).click();
  cy.get('.board .cell').eq(0).should('have.class', 'X'); 

  cy.wait(4000)
  cy.get('main').should('contain', "O: Tito's turn...");
  cy.get('.board .cell').eq(1).click(); 
  cy.get('.board .cell').eq(1).should('have.class', 'O');

  cy.wait(4000)
  cy.get('main').should('contain', "X: Thomas' turn...");
  cy.get('.board .cell').eq(2).click();
  cy.get('.board .cell').eq(2).should('have.class', 'X');

  cy.wait(4000)
  cy.get('main').should('contain', "O: Tito's turn...");
  cy.get('.board .cell').eq(3).click();
  cy.get('.board .cell').eq(3).should('have.class', 'O');

  cy.wait(4000)
  cy.get('main').should('contain', "X: Thomas' turn...");
  cy.get('.board .cell').eq(4).click();
  cy.get('.board .cell').eq(4).should('have.class', 'X');

  cy.wait(4000)
  cy.get('main').should('contain', "O: Tito's turn...");
  cy.get('.board .cell').eq(5).click();
  cy.get('.board .cell').eq(5).should('have.class', 'O');

  cy.wait(4000)
  cy.get('main').should('contain', "X: Thomas' turn...");
  cy.get('.board .cell').eq(6).click();
  cy.get('.board .cell').eq(6).should('have.class', 'X'); // X wins
});


Then('Player X wins the game', () => {
  cy.get('main').should('contain', "X: Thomas won!");
});
  
Then('Player O clicks to make a move in a cell out of bounds', () => {
  cy.wait(4000)
  cy.get('.board .cell').eq(7).click();
  cy.get('.board .cell').eq(7).should('not.have.class', 'O'); 
});
   
Then('Player X clicks to make a move in an occupied square', () => {
  cy.wait(4000)
  cy.get('.board .cell').eq(0).click(); 
  cy.get('.board .cell').eq(0).should('have.class', 'X'); 
});
     