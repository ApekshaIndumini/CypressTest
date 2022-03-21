Feature: Logout from to Airspace Web Portal

    As a user I want to logout from the Airspace Web Portal

    Scenario: User logout from the Secure area
        Given user navigates to the login page
        Then user enters "tomsmith" as the valid username
        Then user enters "SuperSecretPassword!" as the password
        Then user clicks on Login button
        And user clicks on logout button
        Then user verify login page URL
