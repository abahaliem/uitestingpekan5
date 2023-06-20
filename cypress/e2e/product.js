describe("Open Menu Product", ()=>{
    it('should contain url /products', ()=>{
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div').click()
       cy.url().should('include', '/products')
    })
  })
  
describe("Add New Product Mobil Xpander", ()=>{
    it('success open form create product, should contain url /products/create', ()=>{
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
       cy.url().should('include', '/products/create')
    })
    it('success create new product Mobil Xpander, should contain url /products', ()=>{
       cy.get('#kode').type('MBXP001')
       cy.get('#nama').type('Mobil Xpander')
       cy.get('#deskripsi').type('Mobil Xpander mitsubishi')
       cy.get('#harga\\ beli').type('300000000')
       cy.get('#harga\\ jual').type('250000000')
       cy.get('#stok').type('50')
       cy.get('#kategori').click()
       cy.contains('Mobil').click()
       cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
       cy.url().should('include', '/products')
    })    
  })

