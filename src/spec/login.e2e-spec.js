import {browser, ExpectedConditions} from 'protractor';
import {SignUpPage} from '../page-objects/signUp.page';
import {StartPage} from '../page-objects/start-page';
import {LogInPage} from '../page-objects/logIn-page';
import {LoginWithEmailPage} from '../page-objects/login-with-email.page';

describe('Login Page', () => {
    browser.waitForAngularEnabled(false);

    const startPage = new StartPage();
    const singUpPage = new SignUpPage();
    const logInPage = new LogInPage();
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

    it('Should successfully log in using email ', () => {
        startPage.loginButton.getWebElement()
            .then(button => button.click())
            .then(() => browser.driver.switchTo().defaultContent())
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(singUpPage.logInLink), 1000))
            .then(() => singUpPage.logInLink.click())
            .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(logInPage.loginWithEmailLink), 1000))
            .then(() => logInPage.loginWithEmailLink.click())
            .then(() => browser.wait(ExpectedConditions.presenceOf(logInPage.emailInput), 5000))
            // .then(() => browser.driver.wait(ExpectedConditions.visibilityOf(logInPage.emailInput), 3000))
            // .then((() => logInWithEmailPage.emailInput.click()))
            // .then(() => LoginWithEmailPage.emailInput.isPresent())
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
