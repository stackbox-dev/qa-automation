Feature: WMS
  
  Background:
        Given I visit the page "https://apps.staging.stackbox.xyz/login"
        
        And I land on the page "https://apps.staging.stackbox.xyz/login"
    
        When I enter the form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

        And I click on button with text "Login"

        Then I land on the page "/"
    
    Scenario: Creating Internal Session

        Given I visit the page "https://apps.staging.stackbox.xyz/wms?nodeId=3774353390089100"

        When I open the menuBar and select "Master Data" and click on "Manpower"

        And I login with the UserName "Abhay"

