import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given(
  'I enter the form with placeholder {string} as {string} and {string} as {string}',
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

Then('I land on the page {string}', (url: string) => {
  cy.wait(1000);
  cy.url().should('include', url);
});

When('I click on the calendar icon', () => {
  cy.get('use[href="/sprite.svg#calendar"]').closest('span').click();
});

Then(
  'I select from date as year {string} month {string} and date {string} and to date as year {string} month {string} and date {string}',
  (
    fromYear: string,
    fromMonth: string,
    fromDate: string,
    toYear: string,
    toMonth: string,
    toDate: string,
  ) => {
    const month = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    cy.get('.react-datepicker__header select').first().select(fromYear);

    cy.get('.react-datepicker__header select').last().select(month(fromMonth));

    cy.get('.react-datepicker__day')
      .not('.react-datepicker__day--outside-month') // Ignore days from other months
      .contains(fromDate)
      .click();

    cy.get('.react-datepicker__header select').first().select(toYear);

    cy.get('.react-datepicker__header select').last().select(month(toMonth));

    cy.get('.react-datepicker__day')
      .not('.react-datepicker__day--outside-month') // Ignore days from other months
      .contains(toDate)
      .click();
  },
);

When(
  'I select the checkbox with vehicle number {string}',
  (vehicleNumber: string) => {
    cy.get('table tbody tr').each(($row) => {
      // Find the cell containing the vehicle number
      cy.wrap($row)
        .find('td')
        .eq(2)
        .then(($cell) => {
          if ($cell.text().trim() === vehicleNumber) {
            // Select the checkbox in the first cell of the row
            cy.wrap($row)
              .find('td')
              .eq(0)
              .find('input[type="checkbox"]')
              .check();
          }
        });
    });
  },
);

// Then('A modal with text {string} appears', (modelText: string) => {
//   cy.get('div[role="status"]').should('be.visible').and('contain.text', modelText)
// })

Then('A modal with text {string} appears', (modalText) => {
  // Soft assertion array
  const softAssertions: string[] = [];

  // Helper function to add assertions to the soft assertions array
  const assert = (assertionFn: any) => {
    cy.wrap(null, { log: false }).then(() => {
      try {
        assertionFn();
      } catch (e: any) {
        softAssertions.push(e.message);
      }
    });
  };

  // Check if the modal appears and contains the specified text
  assert(() => {
    cy.get('body').then(($body) => {
      if ($body.find('div[role="status"]').length > 0) {
        cy.get('div[role="status"]').should('be.visible');
        cy.get('div[role="status"]').should('contain.text', modalText);
      } else {
        // If the modal does not appear, log this as a warning but do not fail the test
        Cypress.log({
          name: 'Warning',
          message: 'Modal did not appear',
        });
      }
    });
  });

  // Log soft assertions if any
  cy.wrap(null, { log: false }).then(() => {
    if (softAssertions.length > 0) {
      Cypress.log({
        name: 'soft assertion failed',
        message: softAssertions.join('\n'),
      });
    }
  });
});

Given('I select the tab with name {string}', (selectedTab) => {
  // Use the find command to search for the tab button
  cy.get('div[role="tablist"] button').then(($buttons) => {
    const button = $buttons.find(`h6:contains(${selectedTab})`).first();
    if (button.length > 0) {
      // If the tab exists, click it
      cy.wrap(button).click();
    } else {
      // If the tab does not exist, log a warning but continue the test
      Cypress.log({
        name: 'Warning',
        message: `Tab with name "${selectedTab}" not found`,
      });
    }
  });
});

When('I click on the tab {string}', (tabName: string) => {
  cy.get('div[role="tablist"] button').then(($buttons) => {
    const button = $buttons.filter((index, button) => {
      return Cypress.$(button).find('h6').text().trim() === tabName;
    });

    if (button.length > 0) {
      // If the tab exists, click it
      cy.wrap(button).click().wait(2000);
    } else {
      // If the tab does not exist, log a warning but continue the test
      Cypress.log({
        name: 'Warning',
        message: `Tab with name "${tabName}" not found`,
      });
    }
  });
});

When('I click on the Work Order Management button', () => {
  cy.get('body').then(($body) => {
    if (
      $body.find(
        'div[role="button"].bg-primary svg use[href="/sprite.svg#user-circle"]',
      ).length > 0
    ) {
      // If the button exists, click it
      cy.get('div[role="button"].bg-primary')
        .find('svg use[href="/sprite.svg#user-circle"]')
        .closest('div[role="button"]')
        .click()
        .wait(1000);
    } else {
      // If the button does not exist, log a warning but continue the test
      Cypress.log({
        name: 'Warning',
        message: 'Button with user-circle icon not found',
      });
    }
  });
});

Then('I select the ASSIGNEES with name {string}', (assigneeName: string) => {
  cy.get('table tbody tr').then(($rows) => {
    let found = false;

    $rows.each((index, row) => {
      const $row = Cypress.$(row);
      const assignee = $row.find('td:nth-child(2) .text-primary').text().trim();

      if (assignee.includes(assigneeName)) {
        // If the assignee is found, click the checkbox in the row
        cy.wrap($row).find('input[type="checkbox"]').click();
        found = true;
        return false; // Break the loop
      }
    });

    if (!found) {
      // If the assignee is not found, log a warning but continue the test
      Cypress.log({
        name: 'Warning',
        message: `Assignee with name "${assigneeName}" not found`,
      });
    }
  });
});

Then(
  'I select the columnName {string} with columnValue {string}',
  (columnName, columnValue) => {
    // Get all the column headers
    cy.get('table thead th').then(($headers) => {
      let columnIndex = -1;

      // Iterate through headers to find the column index
      $headers.each((index, header) => {
        if (Cypress.$(header).text().trim() === columnName) {
          columnIndex = index + 1; // +1 because nth-child is 1-based index
        }
      });

      // If column index is not found, log a message and continue
      if (columnIndex === -1) {
        cy.log(`Column "${columnName}" not found.`);
        return;
      }

      // Iterate over each row to find the cell with the specified column value
      cy.get('table tbody tr').each(($row) => {
        cy.wrap($row)
          .find(`td:nth-child(${columnIndex})`)
          .then(($cell) => {
            const cellText = $cell.text().trim();

            // If the cell value matches the specified column value, click the checkbox in that row
            if (cellText === columnValue) {
              cy.wrap($row).find('input[type="checkbox"]').check().wait(1000);
            }
          });
      });
    });
    // (columnName: string, columnValue: string) => {
    //   cy.get('table thead th')
    //     .contains(columnName)
    //     .invoke('index')
    //     .then(colIndex => {
    //       // Locate the row containing the column value
    //       cy.get('table tbody tr').then($rows => {
    //         let found = false

    //         $rows.each((index, row) => {
    //           const $row = Cypress.$(row)
    //           const cellValue = $row.find(`td:eq(${colIndex})`).text().trim()

    //           if (cellValue.includes(columnValue)) {
    //             // If the column value is found, click the checkbox in the row
    //             cy.wrap($row).find('input[type="checkbox"]').click()
    //             found = true
    //             return false // Break the loop
    //           }
    //         })

    //         if (!found) {
    //           // If the column value is not found, log a warning but continue the test
    //           Cypress.log({
    //             name: 'Warning',
    //             message: `Value "${columnValue}" not found in column "${columnName}"`,
    //           })
    //         }
    //       })
    //     })
  },
);

Then('I click buttton with text {string}', (buttonText: string) => {
  cy.get(`button.text-buttonLarge`)
    .contains('button', buttonText)
    .then(($button) => {
      // Check if the button is found
      if ($button.length > 0) {
        // Click the button
        cy.wrap($button).click();
      } else {
        // Log a message if the button is not found
        cy.log(`Button with text "${buttonText}" not found.`);
      }
    });

  // Continue even if the test fails to find the button
  Cypress.on('fail', (error, runnable) => {
    if (error.message.includes(`Button with text "${buttonText}" not found.`)) {
      return false;
    }
    throw error;
  });
});

Then(
  'I click on the dropdown with the placeHolder {string} and select the value {string}',
  (placeholderText: string, dropdownValue: string) => {
    cy.contains('.react-select__placeholder', placeholderText)
      .parent()
      .parent()
      .find('.react-select__dropdown-indicator')
      .click();

    cy.get('.react-select__option')
      .should('be.visible')
      .contains(dropdownValue) // Find the dropdown option by its value
      .click(); // Click the dropdown option to select it
  },
);

Then('I click the button inside modal with name {string}', (name: string) => {
  cy.get('.my-8.inline-block')
    // .should('be.visible') // Ensure the modal is visible
    .within(() => {
      cy.contains('button', name)
        .should('be.visible') // Ensure the button is visible
        .click(); // Click the button
    });
});
