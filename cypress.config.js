const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
  specPattern: "cypress/e2e/**/*.{feature,cy.js}",
  baseUrl:"http://trello.com/",
  chromeWebSecurity:false,
  setupNodeEvents(on, config) {
    on("file:preprocessor", cucumber());
  },
  },
});