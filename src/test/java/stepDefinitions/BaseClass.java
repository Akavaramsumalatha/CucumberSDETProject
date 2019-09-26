package stepDefinitions;

import java.util.Properties;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPageObject;
import pageObjects.SearchCustomerPage;

public class BaseClass {
	
	public WebDriver driver;
	public LoginPageObject lp;
	public AddCustomerPage addCust;
	public SearchCustomerPage searchCust;
	public Properties configProp;
	//public static Logger logs;
		
	//Created for generating random string for Unique email
	public static String randomestring(){
		String generatedString1 = RandomStringUtils.randomAlphabetic(5);
		return (generatedString1);
	}


}
