export default class SecureArea{

    flashMessage(){
        return cy.get('[id="flash-messages"]')
    }

    getHeader() {
        return cy.get('.example');
    }

    getSubHeader(){
        return cy.get('.subheader')
      }

    getLogOutButton(){
        return cy.get('.radius')
    }
  
}