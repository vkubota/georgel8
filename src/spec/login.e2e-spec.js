import {browser, ExpectedConditions} from 'protractor';
import {SignUpPage} from '../page-objects/signUp-page'
import {StartPage} from '../page-objects/start-page';
import {LogInPage} from '../page-objects/logIn-page';
import {MainPage} from "../page-objects/main-page";

describe('Login Page', () => {
    browser.waitForAngularEnabled(false);

    const startPage = new StartPage();
    const singUpPage = new SignUpPage();
    const logInPage = new LogInPage();
    const mainPage = new MainPage();


    beforeEach(() => {
        startPage.getPage(3000)
            .then(() => browser.driver.switchTo().frame(startPage.iframeWithLoginButton.getWebElement()))
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(startPage.loginButton), 3000));
    });

    it('Should successfully log in user system', () => {
        startPage.loginButton.getWebElement()
            .then(button => button.click())
            .then(() => browser.driver.switchTo().defaultContent())
            .then(() => browser.driver.wait(ExpectedConditions.elementToBeClickable(singUpPage.logInLink), 10000))
            .then(() => browser.$('#'))
            .then(() => (browser.actions().mouseMove({x: 0, y: 233}).click().perform()))
            // .then(() => singUpPage.logInLink.click())
            // .then(() => browser.executeScript('document.querySelectorAll(`#signUpDialogswitchDialogLink`)[0].click()'))
            .then(() => browser.driver.wait(ExpectedConditions.elementToBeClickable(logInPage.loginWithEmailLink), 1000))
            .then(() => logInPage.loginWithEmailLink.click())
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(logInPage.emailInput), 3000))
            .then(() => logInPage.emailInput.sendKeys('test567@gmail.com'))
            .then(() => logInPage.passwordInput.sendKeys('111111'))
            .then(() => logInPage.loginButton.click())
            .then(() => mainPage.memberBox.isPresent())
            .then(elementPresent => {
                expect(elementPresent).toBeTruthy();
            });

    });
});
