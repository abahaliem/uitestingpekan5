const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://kasir-api.belajarqa.com",
    specPattern: "cypress/e2e/1endpoint.js",
    testIsolation: false,
    supportFile: false,
    experimentalStudio: true,
    defaultCommandTimeout: 10000
  }
  //,
  // env: {
  //   username: "test123",
  //   password: "12345"
  // }
});