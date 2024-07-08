import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I click on search and type {string}', (searchText: string) => {
  cy.get('#searchBox').type(searchText);
});

When('I click on card with value {string}', (cardText: string) => {
  cy.contains('div', cardText).click();
});

When('I open the menuBar and select {string}',(menuItem: string) => {

    cy.get('use[href="/sprite.svg#left-arrow"]').closest('button').click();

    cy.contains('button', menuItem).click({ force: true });

} )