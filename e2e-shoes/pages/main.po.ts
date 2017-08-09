import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class MainPage {
    linkVittoRossi: ElementFinder = $('a[href*="brand-vitto"]');

    advancedSearchForShoes: ElementFinder = $('a[href*="products_search"]');

    imgComodoSecure: ElementFinder = $('.secure>img');


    navigateTo() {
        return browser.get('/');
    }

    getBasketText() {
        return $('.basket a').getText();

    }

}