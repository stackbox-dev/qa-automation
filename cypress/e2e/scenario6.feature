Feature: WMS
  
  Background:
        Given I visit the page "https://apps.staging.stackbox.xyz/login"
        
        And I land on the page "https://apps.staging.stackbox.xyz/login"
    
        When I enter the form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

        And I click on button with text "Login"

        Then I land on the page "/"
    
    Scenario: Creating Internal

        Given I visit the page "https://apps.staging.stackbox.xyz/wms?nodeId=3774353390089100"

        When I open the menuBar and select "Inbound" and click on "Inbound Order Tray"

        Then I select the columnName "ASN NO" with columnValue "ASN1022132"