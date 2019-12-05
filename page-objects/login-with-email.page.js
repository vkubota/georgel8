import {LoginPage} from "./login-page";

export class LoginWithEmailPage extends LoginPage{
    super() {
        this.emailInput = $('#memberLoginDialogemailInputinput');
        this.passwordInput = $('#memberLoginDialogpasswordInputinput');
        this.loginButton = $('#memberLoginDialogokButton');
    }
}