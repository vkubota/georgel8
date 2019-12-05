import {browser, ExpectedConditions} from 'protractor';
import {SignUpPage} from '../page-objects/signup.page';
import {StartPage} from '../page-objects/start-page';
import {LoginPage} from '../page-objects/login-page';
import {LoginWithEmailPage} from '../page-objects/login-with-email.page';

describe('Login Page', () => {
    browser.waitForAngularEnabled(false);

    const startPage = new StartPage();
    const singUpPage = new SignUpPage();
    const logInPage = new LoginPage();
    const logInWithEmailPage = new LoginWithEmailPage();

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
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(singUpPage.logInLink), 1000))
            .then(() => singUpPage.logInLink.click())
            .then(() => logInPage.loginWithEmailLink.click())
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(logInPage.emailInput), 3000))
            .then(() => logInPage.emailInput.isPresent())
            .then(linkPresent => {
                expect(linkPresent).toBeTruthy();
            });

        // startPage.getPage()
        //     .then(() => startPage.waitForLoginButtonLink())
        //     .then(() => {
        //         startPage.loginButton.click();
        //     })
        //     .then(() => {
        //         singUpPage.loginLink.click();
        //     })
        //     .then(() => {
        //         logInPage.loginWithEmailButton.click();
        //     })
        //     .then(() => {
        //         logInWithEmailPage.fillInFields('test567@gmail.com', '111111');
        //     })
        //     .then(() => (logInWithEmailPage.loginButton.click()))
        //get members array, check id of 1th member
    });
});
