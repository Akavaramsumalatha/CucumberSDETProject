package testRunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features//Customer.feature",
		glue="stepDefinitions",
		monochrome=true,
		tags= {"@SearchCustomerbyemail"},
		plugin= {"pretty","html:test-output"}
		
		)

public class OneTestrunner {
	
	

}
