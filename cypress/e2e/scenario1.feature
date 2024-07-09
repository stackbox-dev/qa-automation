Feature: YMS
  
  Background:
    Given I visit the page "https://apps.staging.stackbox.xyz/login"
    
    And I land on the page "https://apps.staging.stackbox.xyz/login"
  
    When I enter form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

    And I click on button with text "Login"

    Then I land on the page "/"

  Scenario: Add Vehicle in YMS Gate Operations Dashboard

    Given I visit the page "https://apps.staging.stackbox.xyz/wms/yard-management/gate-management?nodeId=3774353390089100"

    Then I land on the page "wms/yard-management/gate-management"

    When I click on the add vehicle button

    Then A modal to "Add Vehicle" pops Up

    And I select the createSelectible dropdown with placeholder "Vehicle Number:" with value "TN112KA4455"

    And I select the createSelectible dropdown with placeholder "Transporter's Name:" with value "15359999"

    And I select the createSelectible dropdown with placeholder "Driver's Ph No:" with value "9842714071"

    And I select the dropDown with label "Consignment Type" with value "OUTBOUND"

    And I select the dropDown with label "Vehicle Type" with value "IN02"

    When I click on button with text "Confirm"

    Then A modal with text "Vehicle Added Successfully" appears

  Scenario: Open vehicle reporting modal

    Given I visit the page "https://apps.staging.stackbox.xyz/wms/yard-management/gate-management?nodeId=3774353390089100"

    When I click on the calendar icon

    Then I select from date as year "2024" month "july" and date "1" and to date as year "2024" month "july" and date "4"

    
