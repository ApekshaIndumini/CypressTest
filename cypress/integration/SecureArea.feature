Feature: Secure Area

    As a user I should be able to view details of secure area page

    Scenario: User login to the secure area sucessfully
        Given user navigates to the login page
        Then user enters "tomsmith" as the valid username
        Then user enters "SuperSecretPassword!" as the password
        Then user clicks on Login button
        And user should be sucessfully logged in

    Scenario: User verify details of the secure area
        Given user navigates to the login page
        When user enters "tomsmith" as the valid username
        Then user enters "SuperSecretPassword!" as the password
        Then user clicks on Login button
        And user should be able to view logged in to the secure area alert
        Then user verify the header of the page
        Then user verify the description of the page
        Then user verify Logout button visibility
        Then user verify Powered by Elemental Selenium Text visibility
