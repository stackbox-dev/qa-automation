    Scenario: Releasing ASN

    Then I land on the page "wms/inbound-order-tray"

    When I click on the calendar icon

    Then I select from date as year "2024" month "june" and date "1" and to date as year "2024" month "June" and date "25"

    Then I select the checkbox with vehicle number "HHTTEST10"

    When I click on button with text "Create Session"

    Then A modal with text "Inbound Session INBOUND-1021 is already ongoing" appears

    When I click on button with text "Append Session"

    Then A modal with text "Session Append Successfully" appears

    
    
    
      Scenario: Assigning Work order

    Then I land on the page "wms/inbound-order-tray"
    
    Given I select the tab with name "IN PROGRESS"

    When I click on the Work Order Management button

    When I click on the calendar icon

    Then I select from date as year "2024" month "june" and date "1" and to date as year "2024" month "June" and date "25"

    And I select the columnName "Assignees" with columnValue "Assign"

    And I click buttton with text "Assign"

    And I click on the dropdown with the placeHolder "Select Associates" and select the value "Pritam_HULUAT1"
    
    And I click the button inside modal with name "Assign"