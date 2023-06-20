describe("Open Menu Category", ()=>{
    it('should contain url /categories', ()=>{
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div').click()
       cy.url().should('include', '/categories')
    })
  })
  
  describe("Add New Category Mobil", ()=>{
    it('success open form create category, should contain url /categories/create', ()=>{
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
       cy.url().should('include', '/categories/create')
    })
    it('success create new category Mobil, should contain url /categories', ()=>{
       cy.get('#nama').type('Mobil')
       cy.get('#deskripsi').type('Mobil Roda Empat')
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
       cy.wait(6000)
       cy.url().should('include', '/categories')
    })    
  })


 