import {SignupPage} from "./signup.page";

export class SignupWithEmailPage extends SignupPage{
    super() {
        this.emailInput = $('#signUpDialogemailInputinput');
        this.passwordInput = $('#signUpDialogpasswordInputinput');
        this.signupButton = $('#signUpDialogokButton');
    }
}