package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class LoginPageObject {

	public WebDriver ldriver;
	
	
	public LoginPageObject(WebDriver gdriver)
	{
		ldriver=gdriver;
		PageFactory.initElements(ldriver, this);
	}
	@FindBy(id = "Email")
	@CacheLookup
	WebElement txtEmail;

	@FindBy(id = "Password")
	@CacheLookup
	WebElement txtPassword;

	@FindBy(xpath = "//input[@value='Log in']")
	@CacheLookup
	WebElement btnLogin;

//	@FindBy(id="RememberMe") WebElement chkrememeber;
	//@FindBy(xpath="//input[@class='button-1 login-button']") WebElement btnLogin;
	
	@FindBy(linkText = "Logout")
	@CacheLookup
	WebElement lnkLogout;

	
	
	public void setUserName(String uname) {
		txtEmail.clear();
		txtEmail.sendKeys(uname);

	}

	public void setPassword(String pwd) {
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}

	public void clickLogin() {
		btnLogin.click();
	}

	public void clickLogout() {
		lnkLogout.click();
	}

}
