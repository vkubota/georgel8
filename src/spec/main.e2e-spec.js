import {MainPage} from "../page-objects/main-page";
import {browser, ExpectedConditions} from "protractor";
import {StartPage} from "../page-objects/start-page";

describe('Main page', () => {
    browser.waitForAngularEnabled(false);

    const mainPage = new MainPage()
    const startPage = new StartPage();

    beforeEach(() => {
        startPage.getPage(3000)
            .then(() => browser.driver.switchTo().frame(startPage.iframeWithLoginButton.getWebElement()))
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(startPage.loginButton), 3000));
    });

    it('should find the user', function () {
        
    });
})