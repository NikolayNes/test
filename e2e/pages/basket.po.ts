import { browser, $, ElementFinder, ElementArrayFinder, $$ } from 'protractor';

export class BasketPage {

    basketIsEmpty: ElementFinder = $('.main_text');
    basketList: ElementArrayFinder = $$('.row.basket-list');

    navigate() {
        return browser.get('/products_basket_list.php?')
    }

    removeProduct(product:ElementFinder) {
        return product.$('.col-xs-12 a').click();
    }
}