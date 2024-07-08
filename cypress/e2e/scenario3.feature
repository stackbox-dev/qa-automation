Feature: WMS
  
  Background:
    Given I visit the page "https://apps.staging.stackbox.xyz/login"
    
    And I land on the page "https://apps.staging.stackbox.xyz/login"
  
    When I enter the form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

    And I click on button with text "Login"

    Then I land on the page "/"

    Scenario: Open vehicle reporting modal

    Given I visit the page "https://apps.staging.stackbox.xyz/wms/yard-management/gate-management?nodeId=3774353390089100"

    When I click on the calendar icon

    Then I select from date as year "2024" month "july" and date "1" and to date as year "2024" month "july" and date "5"

    Given I click on search and type "KA0414254"
    
    When I open the menuBar and select "Gate Operations"

    