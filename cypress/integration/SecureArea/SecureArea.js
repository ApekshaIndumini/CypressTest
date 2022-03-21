/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
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
  
Then("user should be sucessfully logged in", () => {
    cy.url().should("include","https://the-internet.herokuapp.com/secure");
});

Then("user should be able to view logged in to the secure area alert", () => {
    securearea.flashMessage().should("contain",'You logged into a secure area!');
});

Then('user verify the header of the page',()=> {
    securearea.getHeader().should("contain",'Secure Area');
  })

Then("user verify the description of the page", () => {
    securearea.getSubHeader().should("contain",'Welcome to the Secure Area. When you are done click logout below.');
});

Then("user verify Logout button visibility", () => {
    securearea.getLogOutButton().should("contain",' Logout');
});

Then("user verify Powered by Elemental Selenium Text visibility", () => {
    cy.contains('Powered by Elemental Selenium');
});