import {browser, ExpectedConditions} from 'protractor';
import {SignUpPage} from '../page-objects/signUp-page'
import {StartPage} from '../page-objects/start-page';
import {LogInPage} from '../page-objects/logIn-page';

describe('Login Page', () => {
    browser.waitForAngularEnabled(false);

    const startPage = new StartPage();
    const singUpPage = new SignUpPage();
    const logInPage = new LogInPage();


    beforeEach(() => {
        startPage.getPage(3000)
            .then(() => browser.driver.switchTo().frame(startPage.iframeWithLoginButton.getWebElement()))
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(startPage.loginButton), 3000));
    });

    xit('Button link to login page should be present', () => {
        startPage.loginButton.isPresent()
            .then(buttonIsPresent => {
                expect(buttonIsPresent).toBeTruthy();
            });
    });

    it('Should successfully log in user system', () => {
        startPage.loginButton.getWebElement()
            .then(button => button.click())
            .then(() => browser.driver.switchTo().defaultContent())
            .then(() => browser.driver.wait(ExpectedConditions.elementToBeClickable(singUpPage.logInLink), 1000))
            .then(() => singUpPage.logInLink.click())
            .then(() => logInPage.loginWithEmailLink.click())
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(logInPage.emailInput), 3000))
            .then(() => logInPage.emailInput.isPresent())
            .then(linkPresent => {
                expect(linkPresent).toBeTruthy();
            });

    });
});