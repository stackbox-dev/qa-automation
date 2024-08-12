## Cypress

#### Folder Structure: 

- `TESTING-AUTOMATION/`             - root directory of the project
  - `cypress/`                      - contains cypress related files and folders
    - `downloads/`                  
    - `e2e/`                        - contains all the feature files
    - `fixtures/`                   - contains test files used for upload
    - `integration/`                
    - `plugins/`
    - `screenshots/`            
    - `support/`                    - contains support to run cucumber
        - `step_defenitions/`       - contains step defenitions for each line
        - `commands.ts`             - contains custom commands required for cypress
        - `e2e.ts`
    - `App.js`
    - `index.js`
  - `maestro/`                      - contains maestro related files and folders
  - `node_modules/`
  - `...`
  - `package.json`
  - `README.maestro.md`
  - `README.maestro.md`

### Cypress

Cypress is a testing tool used to automates tests for the web.

### Commands

To open the cypress GUI, run the following command from the root of the project:
```sh
npm run cy:open
```