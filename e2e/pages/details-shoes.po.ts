import { $, $$, ElementFinder } from 'protractor';

export class DetailsShoesPage {

    fieldSize: ElementFinder = $('.form-control[name="id_size"]');
    selectSize: ElementFinder = $$('option').last();
    buyButton: ElementFinder = $('.btn.btn-success.buy-500');

    selectSizeAndBuyShoes() {
        this.fieldSize.click();
        this.selectSize.click();
        return this.buyButton.click();
    }
}
