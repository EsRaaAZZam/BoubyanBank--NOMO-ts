Feature: Login functionality

Scenario: Successful login with valid credentials
  Given I launch the app
  When I open the side menu
  And I click the Log In button
  And I enter username "valid.username" and password "valid.password"
  And I click the login button
  Then I should be navigated to the checkout page
  And I open the side menu
  And I click the Log out button
  And I confirm logout

Scenario: Unsuccessful login with locked account
  Given I launch the app
  When I open the side menu
  And I click the Log In button
  And I enter username "locked.username" and password "locked.password"
  And I click the login button
  Then I should see an error message

Scenario: Unsuccessful login with no username
  Given I launch the app
  When I open the side menu
  And I click the Log In button
  And I enter username "no.username" and password "no.password"
  And I click the login button
  Then I should see an error message
