
class LoginPage {
    // Locators
    private get usernameInput(){
        return $('//android.widget.EditText[@content-desc="Username input field"]');
    }

    private get passwordInput() {
        return $('//android.widget.EditText[@content-desc="Password input field"]');
    }

    private get loginButton() {
        return $('//android.view.ViewGroup[@content-desc="Login button"]');
    }

    private get logoutButton(){
        return $('~Logout button');
    }

    private get shoppingCartBtn() {
        return $('~Go Shopping button');
    }

    private get sideMenu() {
        return $('//android.view.ViewGroup[@content-desc="open menu"]');
    }

    private get loginScreenInsideMenu() {
        return $('//android.widget.TextView[@text="Log In"]');
    }

    private get logoutScreenInsideMenu() {
        return $('//android.view.ViewGroup[@content-desc="menu item log out"]');
    }

    private get lockedErrorMessage(){
        return $('//android.widget.TextView[@text="Sorry, this user has been locked out."]')
    }

    private get wrongErrorMessage(){
        return $('~Provided credentials do not match any user in this service.');
    }

    // Methods
    public async enterUsername(username: string): Promise<void> {
        await this.usernameInput.setValue(username);
    }

    public async enterPassword(password: string): Promise<void> {
        await this.passwordInput.setValue(password);
    }

    public async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    public async isLoginSuccessful(): Promise<boolean> {
        return await this.shoppingCartBtn.isDisplayed();
    }

    public async openSideMenu(): Promise<void> {
        await this.sideMenu.isDisplayed();
        await this.sideMenu.click();
    }

    public async clickLoginButton(): Promise<void> {
        await this.loginScreenInsideMenu.isDisplayed();
        await this.loginScreenInsideMenu.click();
    }

    public async clickLogoutButton(): Promise<void> {
        await this.logoutScreenInsideMenu.click();
    }

    public async clickLogout(): Promise<void> {
        await this.logoutButton.click();
    }

    public async getLockedErrorMessage(): Promise<void> {
     
        await this.lockedErrorMessage.isDisplayed()
    }
    

    public async getWrongErrorMessage(): Promise<string> {
        
        return await this.wrongErrorMessage.getText();
    }
}

export default new LoginPage();
