import {browser, $, ElementFinder} from "protractor";

export class BasketList {

    navigateTo() {
        browser.get('/products_basket_list.php?')
    };
    deleteProductFromBasket: ElementFinder = $('.fa.fa-times');

    basketIsAmpty: ElementFinder = $('.main_text');




};