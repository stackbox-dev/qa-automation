/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

// -- This is a parent command --
// Cypress.Commands.add('loginForm', (email: string, password: string) => {
//   cy.get('#input[placeholder="Enter your username"]')
//     .type(email)
//     .get('#input[placeholder="Enter password"]')
//     .type(password)
// })

// Cypress.Commands.add('buttonClick', (buttonText: string, url?: string) => {
//   cy.contains('button', buttonText).click()
//   if (url) {
//     cy.url().should('include', url)
//   }
// })

// Cypress.Commands.add('profileButton', () => {
//   cy.get('#headlessui-menu-button-1').click()
// })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//     //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//     //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//     //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
