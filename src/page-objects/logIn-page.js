import {browser} from 'protractor';

export class LogInPage {
    get loginWithEmailLink() {
        return browser.$('.s_aMsignUpDialogSkinMaterialswitchToEmailLink');
    }

    get emailInput() {
        return browser.$('.s_WTfImemberLoginDialogSkinMaterialinputWithValidation_new')
    }

    get passwordInput() {
        return browser.$('#memberLoginDialogpasswordInputinput');
    }

    get loginButton() {
        return browser.$('#memberLoginDialogokButton');
    }
}
