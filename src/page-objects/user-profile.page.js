import {browser} from "protractor";

export class UserProfilePage {
    get adminMark() {
        return browser.$('.ewp7z')
    }
}