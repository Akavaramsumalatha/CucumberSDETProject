Feature: Nopcommmerce loginPage.

Scenario: login to nopcommerce admin
 Given User Launch Chrome browse
 When User opens URl as "http://admin-demo.nopcommerce.com"
 When User enters Email as "admin@yourstore.com" and Password as "admin"
 When Click on Login 
 Then Page Title should be "Dashboard / nopCommerce administration"
 When User click on Log out link
 Then close browser