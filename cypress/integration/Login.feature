Feature: Login to Airspace Web Portal

    As a user I want to login to the Airspace Web Portal

    Scenario: User Navigates to the Login Page
        Given user navigates to the login page
        Then user verify login page URL

    Scenario: User verify the details of the login page
        Given user navigates to the login page
        Then user verify the header of the page
        And user verify the description of the page
        Then user verify user name and password labels
        Then user verify Login button
        Then user verify Powered by Elemental Selenium Text visibility

    Scenario: User login to the portal sucessfully
        Given user navigates to the login page
        Then user enters "tomsmith" as the valid username
        Then user enters "SuperSecretPassword!" as the password
        Then user clicks on Login button
        And user should be sucessfully logged in

    Scenario: User login to the portal entering invalid user name
        Given user navigates to the login page
        When user enters "invalidUN" as the valid username
        Then user enters "SuperSecretPassword!" as the password
        Then user clicks on Login button
        And user should be able to view username is invalid error message

    Scenario: User login to the portal entering invalid password
        Given user navigates to the login page
        When user enters "tomsmith" as the valid username
        Then user enters "InvalidPW" as the password
        Then user clicks on Login button
        And user should be able to view password is invalid error message

    Scenario: User login to the portal entering invalid user name and password
        Given user navigates to the login page
        When user enters "invalidUN" as the valid username
        Then user enters "InvalidPW" as the password
        Then user clicks on Login button
        And user should be able to view username is invalid error message

    Scenario: User login to the portal without entering the username
        Given user navigates to the login page
        Then user enters "SuperSecretPassword!" as the password
        Then user clicks on Login button
        And user should be able to view username is invalid error message

    Scenario: User login to the portal without entering the password
        Given user navigates to the login page
        When user enters "tomsmith" as the valid username
        Then user clicks on Login button
        And user should be able to view password is invalid error message

    Scenario: User login to the portal without entering the username and the password
        Given user navigates to the login page
        When user clicks on Login button
        Then user should be able to view username is invalid error message