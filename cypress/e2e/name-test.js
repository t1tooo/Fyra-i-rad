import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the Tic-Tac-Toe game page', () => {
  cy.visit("/"); 
});


Then('Player X inserts the name Thomas', () => {
  cy.wait(4000)
  cy.get('dialog').should('be.visible');
  cy.get('h2').contains('Enter the name of player X:');
  cy.get('input[name="answer"]').type('Thomas{enter}');
});

Then('Player O inserts the name Tito', () => {
  cy.wait(4000)
  cy.get('dialog').should('be.visible');
  cy.get('h2').contains('Enter the name of player O:');
  cy.get('input[name="answer"]').type('Tito{enter}');
});

Then('It should say Thomas turn', () => {
cy.get('main').should('contain', "X: Thomas' turn...");
cy.get('.board .cell').eq(0).click();
cy.get('.board .cell').eq(0).should('have.class', 'X');
});



  

 