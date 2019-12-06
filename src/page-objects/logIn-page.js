import {browser} from 'protractor';

export class LogInPage {
    get loginWithEmailLink() {
        return browser.$('.s_aMsignUpDialogSkinMaterialswitchToEmailLink');
    }

    get emailInput() {
        return browser.$('#memberLoginDialogemailInputinput');
    }

    get passwordInput() {
        return browser.$('#memberLoginDialogblockingLayer');
    }

    get loginButton() {
        return browser.$('#memberLoginDialogblockingLayer');
    }
}
