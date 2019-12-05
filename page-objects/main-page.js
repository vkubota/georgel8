import {$$} from "protractor";

export class MainPage {
    constructor() {
        this.memberBox = $('');
        this.searchInput = $('._11kpT.ma-primary-font-color.ma-fill-primary-text');
        this.membersList = $$('.yIWTe.VBPn8');

    }

    findMemberByName(name) {
        this.searchInput.sendKeys(name);
        return this.membersList;
    }
}