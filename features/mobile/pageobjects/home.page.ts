import { ChainablePromiseElement } from 'webdriverio';

class HomePage {
     get checkoutPage() {
        return $('//android.view.ViewGroup[@content-desc="Go Shopping button"]');
    }

     get logoutButton() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

     async navigateToCheckout() {
        console.log(":sdwxsdxs")
        return await this.checkoutPage.isDisplayed();
    }

    public async logout() {
      //  await this.logoutButton.click();
        // Assume there's a confirmation for logout
        await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
    }
}

export default new HomePage();
