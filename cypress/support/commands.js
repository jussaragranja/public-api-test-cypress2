// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('isRegistered', (id, token, code) => {
    cy.request({
        failOnStatusCode: false,
        url: `/users/${id}`,
        headers: { Authorization: `Bearer ${token}`}
    }).its('status').should('be.equal', code)
    //Validação não está .its('status').should('be.equal', 200)
    //porque a api está retornando o statuscode 200 mesmo quando não existe o cadastro
    //apenas no corpo do response na variavel 'code' temos o valor correto
})
