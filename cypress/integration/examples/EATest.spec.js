
/*
describe(' First test', () => {

  it ('Go to our Website', ()=> {
      cy.visit('http://localhost:8080')
      
  })

  it ('Go to login page ', ()=> {
    cy.visit('http://localhost:8080/login')
    
})

   it ("Login to Website " , ()=> {
    cy.get('input[name=username]').type("admin")
    cy.get('input[name=password]').type("admin")
    cy.get('input[value=Login]').click()  // Ask Lecturer about name 
    // || value && ask about why it's not login
   
   } )
   
   
   it ('Go to AboutUs ', ()=> {
    cy.visit('http://localhost:8080/aboutus')
    
})
   
})
*/


/*
const todaysDate = Cypress.moment().format('DD/MMM/YYYY HH:mm');

describe("Given the About page", function() {
    it("should load the about page and display the current date and time", function() {
        cy.visit("http://localhost:8080");

       
        cy.visit('http://localhost:8080/aboutus')
        // cy.url().should('include', '/About us');

        cy.get('input[name=username]').type("admin")
        cy.get('input[name=password]').type("admin")   
        cy.get('input[value=Login]').click()      


        cy.get(".date strong").should("have.text", todaysDate);
    });
});

*/

describe('TestAboutUsPage', function () {

  it('displays the links to other pages', function() {

    cy.visit('http://localhost:8080/aboutus')
    cy.get('input[name=username]').type("admin")
    cy.get('input[name=password]').type("admin")   
    cy.get('input[value=Login]').click()

    cy.contains('Home')
    cy.contains('About us')
    cy.contains('Admin Panel')
  })



  it('redirects to /aboutus', function () {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = dd + '.' + mm + '.' + yyyy;

      cy.visit('localhost:8080')
      cy.visit('http://localhost:8080/aboutus')
      // cy.url().should('include', '/About us');

      cy.get('input[name=username]').type("admin")
      cy.get('input[name=password]').type("admin")   
      cy.get('input[value=Login]').click()
         
      cy.get('div').contains('Hello')   
      cy.get('div').contains('Nader')
      cy.get('div').contains('Sadiq')

     cy.get('p').contains(today)
     cy.get('div').contains('Adam')

     //test for image
     cy.get('[alt=Mathias]')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[1].naturalWidth).to.be.greaterThan(0)
      })
     
	})
	
})

describe(' Test if he is a Admin', function () {
  const username = 'admin'
  const password = 'admin'

  it('redirects to /admin', function () {
      cy.visit('localhost:8080')
      cy.get('a[href*="admin"]').click()
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()

      cy.url().should('include', '/admin')
   
    })
  })

  describe('If User page will get error 403 when it is in a admin panel ', function () {
    const username = 'user'
    const password = 'password'
  
    it('redirects to /admin', function () {
        cy.visit('localhost:8080')
        cy.get('a[href*="admin"]').click()
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('form').submit()
  
        cy.get('div').contains('403')
      
      })
    })