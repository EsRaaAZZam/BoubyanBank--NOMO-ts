Feature: Test Login Feature

  
  @mobile @login @uat
  Scenario Outline: Successful login with valid credentials
  Given I launch the app
  When I open the side menu
  And I click the Log In button
  When I enter credentials for "valid.username"
  And I click the login button
  When I open the side menu
  And I click the Log In button
  Then I should be navigated to the checkout page
  And I open the side menu
  And I click the Log out button
  And I confirm logout


  @mobile @login @uat
  Scenario Outline: Successful login with valid credentials
  Given I launch the app
  When I open the side menu
  And I click the Log In button
  When I enter credentials for "locked.username"
  And I click the login button
  Then I should locked see an error message


