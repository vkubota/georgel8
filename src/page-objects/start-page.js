import {browser} from "protractor";

export class StartPage {
    getPage() {
        return browser.driver.get('https://georgel8.wixsite.com/ait-interview/muejmjbiehrfs');
    }

    get loginButton() {
        return browser.$('._2tzO_');
    }

    get iframeWithLoginButton() {
        return browser.$('#TPASection_jxuhagasiframe');
    }
}
