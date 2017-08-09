import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class RegistrationForm {

    fullName: ElementFinder = $('.form-control');

    buttonReg: ElementFinder = $('.btn');





    navigateTo() {
        return browser.get('/user_reg.php');
    }


}