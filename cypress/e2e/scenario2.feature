Feature: WMS
  
  Background:
    Given I visit the page "https://apps.staging.stackbox.xyz/login"
    
    And I land on the page "https://apps.staging.stackbox.xyz/login"
  
    When I enter the form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

    And I click on button with text "Login"

    Then I land on the page "/"

  Scenario: Date Selection

    Given I visit the page "https://apps.staging.stackbox.xyz/wms/inbound-order-tray?nodeId=1278847555659906"

    Then I land on the page "wms/inbound-order-tray"

    When I click on the calendar icon

    Then I select from date as year "2024" month "june" and date "1" and to date as year "2024" month "June" and date "24"

    Then I select the checkbox with vehicle number "HHTTEST5"

    
  
  
  Scenario: 
    
    
    Given I select the tab with name "PENDING"

    When I click on the Work Order Management button

    Given I click on the tab "RETURNS"

    And I select the columnName "Assignees" with columnValue "returns 4"

    And I click buttton with text "Assign"

    And I click on the dropdown with the placeHolder "Select Associates" and select the value "Pritam_HULUAT1"
    
    And I click the button inside modal with name "Assign"

    








    And I select the checkbox with vehicle number "ASNNUM00037"

    When I click on button with text "Create Session"

    Then A modal with text "Inbound Session INBOUND-1019 is already ongoing" appears

    When I click on button with text "Append Session"

    Then A modal with text "Session Append Successfully" appears

