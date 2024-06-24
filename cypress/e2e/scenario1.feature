Feature: YMS
  
  Background:
    Given I visit the page "https://apps.staging.stackbox.xyz/login"
    
    And I land on the page "https://apps.staging.stackbox.xyz/login"
  
    When Alice enters form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

    And Alice clicks on button with text "Login"

    Then I land on the page "/"

  Scenario: Add Vehicle in YMS Gate Operations Dashboard

    Given I visit the page "https://apps.staging.stackbox.xyz/wms/yard-management/gate-management?nodeId=3774353390089100"

    Then I land on the page "wms/yard-management/gate-management"

    When Alice clicks on the add vehicle button

    Then A modal to "Add Vehicle" pops Up

    And Alice selects the createSelectible dropdown with placeholder "Vehicle Number:" with value "TN12KA4455"

    And Alice selects the createSelectible dropdown with placeholder "Transporter's Name:" with value "15359999"

    And Alice selects the createSelectible dropdown with placeholder "Driver's Ph No:" with value "9842714071"

    And Alice selects the dropdown with label "Consignment Type" with value "OUTBOUND"

    And Alice selects the dropdown with label "Vehicle Type" with value "IN02"

    When Alice clicks on button with text "Confirm"

    Then A modal with text "Vehicle Added Successfully" appears