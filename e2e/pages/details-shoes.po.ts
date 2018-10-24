import { $, $$, browser, ElementFinder } from 'protractor';

export class DetailsShoesPage {

    fieldSize: ElementFinder = $('.form-control[name="id_size"]');
    selectSize: ElementFinder = $$('option').last();
    buyButton: ElementFinder = $('.btn.btn-success.buy-500');

    selectSizeAndBuyShoes() {
        this.fieldSize.click();
        browser.sleep(500);
        this.selectSize.click();
        browser.sleep(500);
        return this.buyButton.click();
    }

    buySelectedItem() {
        return this.buyButton.click();
    }
}
