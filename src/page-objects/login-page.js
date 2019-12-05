import {browser} from 'protractor';

export class LoginPage {
    get loginWithEmailLink() {
        return browser.$('.s_aMsignUpDialogSkinMaterialswitchToEmailLink');
    }

    get emailInput() {
        return browser.$('.s_WTfImemberLoginDialogSkinMaterialinputWithValidation_new')
    }
}
