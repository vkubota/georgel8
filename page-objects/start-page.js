import {browser} from "protractor";

export class StartPage {
    constructor() {
        this.loginButton = $('._2tzO_.ma-primary-button');
        }

        getStartPage() {
            browser.get('https://georgel8.wixsite.com/ait-interview/muejmjbiehrfs');
        }
}