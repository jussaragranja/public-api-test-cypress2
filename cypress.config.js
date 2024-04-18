const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    //supportFile: false,
    baseUrl: "https://gorest.co.in/public/v2",
    setupNodeEvents(on, config) {
      allureCypress(on, 
        //{resultsDir: "./allure-cypress/reporter"}
        );
    },
  },
});