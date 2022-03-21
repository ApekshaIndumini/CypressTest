/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../components/Login";
import SecureArea from "../../components/SecureArea";


const login = new Login();
const securearea = new SecureArea();


Given('user navigates to the login page',()=> {
    cy.visit('https://the-internet.herokuapp.com/login')
  })
  
Then("user enters {string} as the valid username", (Username) => {
    login.getUserNameInput().type(Username);
  });
  
Then("user enters {string} as the password", (Password) => {
    login.getPasswordInput().type(Password);
  });
  
Then("user clicks on Login button", () => {
    login.getLoginButton().click();
  });

Then('user verify login page URL',()=> {
    cy.url().should("include","https://the-internet.herokuapp.com/login");
  })

Then('user clicks on logout button',()=> {
    securearea.getLogOutButton().click();
  })


  
  