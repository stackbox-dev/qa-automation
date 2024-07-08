Feature: WMS
  
  Background:
    Given I visit the page "https://apps.staging.stackbox.xyz/login"
    
    And I land on the page "https://apps.staging.stackbox.xyz/login"
  
    When I enter the form with placeholder "Enter your username" as "WMS4X-ADMIN1" and "Enter password" as "stackbox123"

    And I click on button with text "Login"

    Then I land on the page "/"

    Given I visit the page "https://apps.staging.stackbox.xyz/wms/inbound-order-tray?nodeId=1278847555659906"

    Scenario: Releasing ASN

    Then I land on the page "wms/inbound-order-tray"

    When I click on the add file button

    Then I upload a file

    And I click on button with text "Upload ASN"

    
