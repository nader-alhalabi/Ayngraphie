describe(' First test', () => {

  it ('Go to our Website', ()=> {
      cy.visit('http://localhost:8080')
      
  })

  it ('Go to login page ', ()=> {
    cy.visit('http://localhost:8080/login')
    
})

   it ("Login to Website " , ()=> {
    cy.get('input[name=username]').type("user")
    cy.get('input[name=password]').type("password")
    cy.get('input[value=Login]').click()  // Ask Lecturer about name || value && ask about why it's not login

   } )
   
   it ('Go to AboutUs ', ()=> {
    cy.visit('http://localhost:8080/aboutus')
    
})
   



})