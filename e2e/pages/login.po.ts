import { $, $$, browser, ElementFinder } from 'protractor';

export class LoginPage {

    inputEmail: ElementFinder = $('input[type="email"]');
    inputPassword: ElementFinder = $('input[type="password"]');
    buttonLogin: ElementFinder = $('.form-group button[type="submit"]');

    navigateTo() {
        return browser.get('/user_login.php');
    }

    login() {
        this.inputEmail.sendKeys(browser.params.user);
        this.inputPassword.sendKeys(browser.params.pass);
        return this.buttonLogin.click();
    }
}