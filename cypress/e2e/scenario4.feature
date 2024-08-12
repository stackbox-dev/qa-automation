Feature: WMS
  
  Background:
    Given I visit the page "https://apps.staging.stackbox.xyz/login"
    
    And I land on the page "https://apps.staging.stackbox.xyz/login"
  
    When I enter the form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

    And I click on button with text "Login"

    Then I land on the page "/"

    Scenario: Creating Internal Session

    Given I visit the page "https://apps.staging.stackbox.xyz/wms?nodeId=1278847555659906"

    When I open the menuBar and select "Internal Operations" and click on "IM Cockpit"

    And I click on the Create Session

