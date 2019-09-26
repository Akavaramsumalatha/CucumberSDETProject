$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Customer.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Customer by EMailID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchCustomerbyemail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "OneStepDefinition.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "OneStepDefinition.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "OneStepDefinition.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "OneStepDefinition.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "OneStepDefinition.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "OneStepDefinition.user_click_on_customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "OneStepDefinition.click_on_customers_Menu_Item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter customer EMail",
  "keyword": "And "
});
formatter.match({
  "location": "OneStepDefinition.enter_customer_EMail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "OneStepDefinition.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should found Email in the Search table",
  "keyword": "Then "
});
formatter.match({
  "location": "OneStepDefinition.user_should_found_Email_in_the_Search_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "OneStepDefinition.close_browser()"
});
formatter.result({
  "status": "passed"
});
});