/// <reference types="cypress" />

import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('I login with the UserName {string}', (name: string) => {
  cy.contains('.grid .rounded-xl', name).within(() => {
    cy.contains('button', 'Log In').click();
  });
});
