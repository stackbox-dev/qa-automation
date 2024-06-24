// describe('userLogin', () => {
//   it('should navigate to the about page', async () => {
//     cy.loginForm('SAMAD', 'stackbox123')
//       .buttonClick('Login', '/')
//       .profileButton()
//       .buttonClick('Logout')
//   })
// })

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Given('I visit the page {string}', (url: string) => {
//   cy.visit(url)
//   cy.wait(1000)
//   // cy.intercept('POST', '/api/login').as('loginRequest')
// })

Given('I visit the page {string}', (url: string) => {
  cy.visit(url);
  cy.wait(1000);
  // cy.intercept('POST', '/api/login').as('loginRequest')
});

Given(
  'Alice enters form with placeholder {string} as {string} and {string} as {string}',
  (
    placeholder1: string,
    placeholder1Value: string,
    placeholder2: string,
    placeholder2Value: string,
  ) => {
    // cy.loginForm(placeholder1Value, placeholder2Value)
    cy.get(`#input[placeholder="${placeholder1}"]`)
      .type(placeholder1Value)
      .get(`#input[placeholder="${placeholder2}"]`)
      .type(placeholder2Value);
  },
);

When('Alice clicks on button with text {string}', (buttonText: string) => {
  cy.contains('button', buttonText).click();
});

When('Alice clicks on the add vehicle button', () => {
  cy.get('div[role="button"].bg-primary').click();
});

Then('A modal to {string} pops Up', (modelName: string) => {
  cy.contains('h4', modelName)
    .should('be.visible')

    .get('.transform.opacity-100.scale-100') //try to remove this
    .should('be.visible');
});

Then(
  'Alice selects the dropdown with label {string} with value {string}',
  (label: string, selectionValue: string) => {
    cy.contains('.my-8.inline-block', 'Add Vehicle')
      .contains('p', label)
      .parent() // Navigate to the parent div
      .find(`div.react-select__control`)
      // cy.contains('.css-14el2xx-placeholder', placeholderValue)
      // .parent()
      // .find('.react-select__input')
      .click({ force: true });
    cy.contains('.react-select__option', selectionValue).click();
  },
);

Then(
  'Alice selects the createSelectible dropdown with placeholder {string} with value {string}',
  (placeholderValue: string, selectionValue: string) => {
    cy.contains('p', placeholderValue)
      .parent()

      //   cy.get('.react-select__control').within(() => {
      //     cy.get('input').focus();
      // });

      // // Type to filter options (if required) and select the option
      // cy.get('.react-select__input input').type(selectionValue, { force: true });

      // // Wait for options to be visible and select the option
      // cy.get('.react-select__menu')
      //     .should('be.visible')
      //     .contains('.react-select__option', selectionValue)
      //     .click({ force: true });

      // .get('div.css-14el2xx-placeholder')
      //   // .contains(placeholderValue)
      //   .parent()
      //   .parent()
      .find('input')
      .type(`${selectionValue}`)
      .wait(2000)
      .type(`{enter}`);

    cy.contains('p', "Driver's Name:")
      .parent() // Navigate to the parent div
      .find('input') // Find the input within the parent div
      .clear()
      .type(`John Doe{enter}`);

    //fallback
    // cy.contains('.css-14el2xx-placeholder',placeholderValue)
    // .parent()
    // .parent()
    // .find('.css-1d8n9bt input')
    // .click()

    // cy.get('[id^="react-select-"]').then(($option) => {
    //   if ($option.length > 0) {
    //     //here it works only for the vehicle input box
    //     cy.get('#react-select-3-input').type(selectionValue)
    //     cy.get('#react-select-3-input').type('{enter}')
    //     // cy.get(`#react-select-3-option-${$option.index()}`).click()
    //   } else {
    //     // Input the vehicle number if not available in the dropdown
    //   }
    // })

    // cy.get('[id^="react-select-"]').contains(selectionValue).then(option => {
    //   console.log(`bla bla \n`,option)
    //   if (option && option.length > 0) {
    //     cy.click();
    //   } else {
    //     cy.get('#react-select-23-input')
    //       .clear()
    //       .type(selectionValue, { delay: 100 })
    //       // .blur(); // Blur the input field to trigger any associated events
    //   }
    // });
  },
);

Then('A modal with text {string} appears', (modelText: string) => {
  cy.get('div[role="status"]')
    .should('be.visible')
    .and('contain.text', modelText);
});
