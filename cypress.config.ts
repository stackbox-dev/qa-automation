import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

// const addCucumberPreprocessorPlugin =
//   require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
// const createEsbuildPlugin = require('@bahmutov/cypress-esbuild-preprocessor').createEsbuildPlugin

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)
  const bundler = createBundler({
    // @ts-ignore
    plugins: [createEsbuildPlugin(config)],
  })

  on('file:preprocessor', bundler)

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

export default defineConfig({
  component: {
    specPattern: 'app/**/*.cy.{ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/**/*.feature'],
    // specPattern: "cypress/e2e/**/*.cy.ts",

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: 'https://apps.staging.stackbox.xyz/',
    supportFile: false,
    // @ts-ignore
    nonGlobalStepDefinitions: false,
    stepDefinitions: 'cypress/**/*.ts',
  },
})

// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
