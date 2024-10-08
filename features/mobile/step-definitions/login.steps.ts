import { Before, Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import { addLog } from "../../utils/commands";
import * as fs from 'fs';
import * as path from 'path';
import homePage from '../pageobjects/home.page';

const testDataPath = path.resolve(__dirname, '../../..//users.json');
let testData: any;

Before({ tags: '@mobile and @login' }, async () => {
    await driver.pause(2000);
    addLog('Launching the application');
});

Before(async () => {
    const data = fs.readFileSync(testDataPath, 'utf-8');
    testData = JSON.parse(data);
});

Given('I launch the app', async () => {
    await browser.reloadSession();
});

When('I open the side menu', async () => {
    await LoginPage.openSideMenu();
});

When('I click the Log In button', async () => {
    await LoginPage.clickLoginButton();
});



When('I click the login button', async () => {
    await LoginPage.clickLogin();
});

Then('I should be navigated to the checkout page', async () => {
    expect(await HomePage.navigateToCheckout()).toBe(true);
});

When('I click the Log out button', async () => {
    await LoginPage.clickLogoutButton();
});

Then('I should see an error message', async () => {
    const errorMessage = await LoginPage.getWrongErrorMessage(); // Adjust method as needed
    expect(errorMessage).toContain('Provided credentials do not match any user in this service.');
});

When('I enter credentials for {string}', async (userType: string) => {
    const user = testData[userType]; // Directly access the user data by key

    if (user) {
        await LoginPage.enterUsername(user.username);
        await LoginPage.enterPassword(user.password);
    } else {
        throw new Error(`User type "${userType}" not found in test data.`);
    }
});

When('I confirm logout', async () => {
    await HomePage.logout()
});

When('I should locked see an error message', async () => {
    await LoginPage.getLockedErrorMessage()

});

