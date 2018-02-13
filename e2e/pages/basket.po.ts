import { browser, $, ElementFinder, ElementArrayFinder, $$ } from 'protractor';

export class BasketPage {

    basketIsEmpty: ElementFinder = $('.main_text');
    basketList: ElementArrayFinder = $$('.row.basket-list');
    confirmButton: ElementFinder = $('.btn.btn-success');
    customerName: ElementFinder = $$('.form-group.pink_form input').first();
    customerPhone: ElementFinder = $$('.form-group.pink_form input').get(1);
    customerAddress: ElementFinder = $$('.form-group.pink_form input').get(2);
    customerComment: ElementFinder = $$('.form-group.pink_form input').get(3);
    confirmOrderButton: ElementFinder = $('.form-group .btn.btn-success');
    successh1: ElementFinder = $('div h1');
    successMessage: ElementFinder = $('.alert.alert-dismissible.alert-success');

    navigate() {
        return browser.get('/products_basket_list.php?')
    }

    removeProduct(product:ElementFinder) {
        return product.$('.col-xs-12 a').click();
    }

    fillBusketOrder() {
        this.clearAndSendKeys(this.customerName, 'Shoes.ua - test');
        this.clearAndSendKeys(this.customerPhone, '(097) 3-5555-76');
        this.clearAndSendKeys(this.customerAddress, 'Test Address');
        return this.clearAndSendKeys(this.customerComment, 'Test Comment');
    }

    clearAndSendKeys(input: ElementFinder, keys: string) {
        input.clear();
        return input.sendKeys(keys);
    }
}