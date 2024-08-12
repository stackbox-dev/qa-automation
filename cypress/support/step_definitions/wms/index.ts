/// <reference types="cypress" />

import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I click on search and type {string}', (searchText: string) => {
  cy.get('#searchBox').type(searchText);
});

When('I click on card with value {string}', (cardText: string) => {
  cy.contains('div', cardText).click();
});

When(
  'I open the menuBar and select {string} and click on {string}',
  (menuItem: string, subMenuItem?: string) => {
    cy.get('use[href="/sprite.svg#left-arrow"]').closest('button').click();

    if (subMenuItem) {
      cy.contains('h6', menuItem)
        .parent('button')
        .click({ force: true })
        .parent('li')
        // .find('svg[use*="arrow"]')
        // .should('be.visible') // Soft assertion: check if the arrow is visible
        .then(($arrow) => {
          // If the arrow exists, click it to reveal the submenu
          if ($arrow.length) {
            cy.wrap($arrow).click({ force: true });
          }

          // Click the submenu item if it exists
          cy.contains('h6', subMenuItem)
            .parent('a')
            .then(($submenu) => {
              if ($submenu.length) {
                cy.wrap($submenu).click().wait(2000);
              } else {
                // Log that the submenu item was not found
                cy.log(`Submenu item "${subMenuItem}" not found`);
              }
            });
        });
    } else {
      cy.contains('button', menuItem).click({ force: true });
    }
  },
);

When('I click on the Create Session', () => {
  cy.get('svg use[href="/sprite.svg#plus"]')
    .closest('div[role="button"]')
    .click({ force: true })
    .wait(2000);
});

When('I click on the WorkOrder Management', () => {
  cy.get('svg use[href="/sprite.svg#user-circle"]')
    .closest('div[role="button"]')
    .click({ force: true })
    .wait(2000);
});
