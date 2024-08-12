/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the page {string}', (url: string) => {
  cy.visit(url);
  cy.wait(1000);
});

Given(
  'I enter form with placeholder {string} as {string} and {string} as {string}',
  (
    placeholder1: string,
    placeholder1Value: string,
    placeholder2: string,
    placeholder2Value: string,
  ) => {
    cy.get(`#input[placeholder="${placeholder1}"]`)
      .type(placeholder1Value)
      .get(`#input[placeholder="${placeholder2}"]`)
      .type(placeholder2Value);
  },
);

When('I click on button with text {string}', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

When('I click on the add vehicle button', () => {
  cy.get('div[role="button"].bg-primary').click();
});

Then('A modal to {string} pops Up', (modelName: string) => {
  cy.contains('h4', modelName)
    .should('be.visible')
    .get('.transform.opacity-100.scale-100') //try to remove this
    .should('be.visible');
});

Then(
  'I select the dropDown with label {string} with value {string}',
  (label: string, selectionValue: string) => {
    cy.contains('.my-8.inline-block', 'Add Vehicle')
      .contains('p', label)
      .parent() // Navigate to the parent div
      .find(`div.react-select__control`)
      .click({ force: true });
    cy.contains('.react-select__option', selectionValue).click();
  },
);

Then(
  'I select the createSelectible dropdown with placeholder {string} with value {string}',
  (placeholderValue: string, selectionValue: string) => {
    cy.contains('p', placeholderValue)
      .parent()
      .find('input')
      .type(`${selectionValue}`)
      .wait(2000)
      .type(`{enter}`);

    cy.contains('p', "Driver's Name:")
      .parent() // Navigate to the parent div
      .find('input') // Find the input within the parent div
      .clear()
      .type(`John Doe{enter}`);
  },
);
