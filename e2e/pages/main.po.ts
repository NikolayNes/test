import {$, $$, browser, ElementArrayFinder, ElementFinder} from "protractor";

export class MainPage {
    registrationForm: ElementFinder = $('.memb_login');
    categoriesMain: ElementArrayFinder = $$('.kategorii');
    login: any;

    navigateTo() {
        return browser.get('/');
    }

    getH1Text() {
        return $('.header h1').getText();
    }
}