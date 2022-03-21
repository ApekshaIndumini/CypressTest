export default class Login {
    constructor() {}
  
    getHeader() {
      return cy.get('.example');
    }

    getSubHeader(){
        return cy.get('.subheader')
    }

    getLoginForm(){
        return cy.get('[id="login"]')
    }

    getUserNameInput(){
        return cy.get('[id="username"]')
    }

    getPasswordInput(){
        return cy.get('[id="password"]')
    }

    getLoginButton(){
        return cy.get('.radius')
    }

    getInvalidCredentialsError(){
        return cy.get('[id="flash-messages"]')
    }


  }