import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class UserLogin {

inputEmail: ElementFinder = $('input[name="c_login"]');
inputPassword: ElementFinder = $('input[name="c_pass"]');
buttonSubmit: ElementFinder = $(".form-group button");





}




    /*navigateTo() {
        return browser.get('/c-man.html')

        navigateTo() {
            return browser.get('/user_login.php');
    }

    getBasketText() {
        return $('.basket a').getText();*/
