import {browser} from "protractor";

export class StartPage {
    constructor() {
        this.loginButton = $('._2tzO_.ma-primary-button');
        }

    getPage() {
        return browser.get('https://georgel8.wixsite.com/ait-interview/muejmjbiehrfs');
    }
}