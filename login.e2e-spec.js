import {describe, it} from "selenium-webdriver/testing";
import {browser} from "protractor"
import {SignupPage} from "./page-objects/signup.page";
import {StartPage} from "./page-objects/start-page";
import {LoginPage} from "./page-objects/login-page";
import {LoginWithEmailPage} from "./page-objects/login-with-email.page";

describe('Login Page', function () {
    const startPage = new StartPage();
    const singUpPage = new SignupPage();
    const logInPage = new LoginPage();
    const logInWithEmailPage = new LoginWithEmailPage();

    it('should successfully log in user system', function () {
        startPage.getPage()
            .then(() => {
                startPage.loginButton.click()
            })
            .then(() => {
                singUpPage.loginLink.click();
            })
            .then(() => {
                logInPage.loginWithEmailButton.click();
            })
            .then(() => {
                logInWithEmailPage.fillInFields('test567@gmail.com', '111111')
            })
            .then(() => (logInWithEmailPage.loginButton.click()))
        //get members array, check id of 1th member


    });
});