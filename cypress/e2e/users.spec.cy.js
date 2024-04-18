const token = '06c2c09312699913ab233d46662002b78501bba311436de8bb52a3b420af741d'
let random
let idUser

describe('Create a new user', () => {
    it('Create a new user - sucess', () => {
        random = Cypress._.random(0, 10000)
        cy.fixture('user').then(userJson => {
            cy.request({
            url: '/users',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`},
            body: userJson
        }).as('response').then(res => console.log(res))

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('name', 'Jussara Teste')
            expect(res.body).to.have.property('email', 'jussarateste@example.com')
            expect(res.body).to.have.property('gender', 'female')
            expect(res.body).to.have.property('status', 'active')
        })

        cy.get('@response').then(res => {
            cy.isRegistered(res.body.id, token, 200)
        })

        cy.get('@response').then(res => {
            idUser = (res.body.id)
        })

    })
    })
})

describe('Update user details', () => {
    
    it('Update user details - sucess', () => {
        random = Cypress._.random(0, 10000)
        cy.request({
            url: `/users/${idUser}`,
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}`},
            body: {
                email: "jussarateste"+random+"@example.com"
            }
        }).as('response')
        .its('status').should('be.equal', 200)
                
        cy.get('@response').then(res => {
            expect(res.body).to.have.property('email', 'jussarateste'+random+'@example.com')
        })
    })


})



describe('Delete user', () => {

    it('Delete user - sucess', () => {
        cy.request({
            url: `/users/${idUser}`,
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}`}
        })
        .its('status').should('be.equal', 204)

        cy.isRegistered(idUser, token, 404)
    })

})