describe("Visit kasirAja", () => {
    it('should contain url /login', () => {
      // Open url kasirAja
      cy.visit('https://kasirdemo.belajarqa.com')
      // Assert
      cy.url().should('include', '/login')
    }) 
  })
  
  describe("Login kasirAja", () => {
    it('success login to kasirAja, should contain url /dashboard', () => {
      // Input username and password
      cy.get('#email').type("alami4238@gmail.com")
      cy.get('#password').type("1234567890")
      // Click login
      cy.get('button[type="submit"]').click()
      // Assert
      cy.url().should('include', '/dashboard')
      cy.contains("kasirAja").should("be.visible")
    })
  })
  
