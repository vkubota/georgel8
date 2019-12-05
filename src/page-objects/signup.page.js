import {browser} from 'protractor';

export class SignUpPage {
    get logInLink() {
        return browser.$('#signUpDialogswitchDialogLink');
    }
}
