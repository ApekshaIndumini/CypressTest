/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../components/Login";

const login = new Login();


Given('user navigates to the login page',()=> {
  cy.visit('https://the-internet.herokuapp.com/login')
})

Then('user verify login page URL',()=> {
  cy.url().should("include","https://the-internet.herokuapp.com/login");
})

Then('user verify the header of the page',()=> {
  login.getHeader().should("contain",'Login Page');
})

Then('user verify the description of the page',()=> {
  login.getSubHeader().should("contain",'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');
})

Then('user verify user name and password labels',()=> {
  login.getLoginForm().should("contain",'Username');
  login.getLoginForm().should("contain",'Password');
})

Then('user verify Login button',()=> {
  login.getLoginButton().should("contain",'Login');
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

Then("user should be able to view username is invalid error message", () => {
  login.getInvalidCredentialsError().should("contain",'Your username is invalid!')
});

Then("user should be able to view password is invalid error message", () => {
  login.getInvalidCredentialsError().should("contain",'Your password is invalid!')
});

Then("user verify Powered by Elemental Selenium Text visibility", () => {
  cy.contains('Powered by Elemental Selenium');
});