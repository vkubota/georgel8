import {$$, browser} from "protractor";

export class MainPage {
    get memberBox() {
        return browser.$('.ma-members-member-box.ma-members-member-box-border-color._13ei4 gxOn2')
    }

    get searchInput() {
        return browser.$('._37hYH')
    }

}