import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class CManBoots12869 {

    fieldSize: ElementFinder = $('.form-control[name="id_size"]');

    selectSize: ElementFinder = $$('option').last();

    buyButton: ElementFinder = $('.btn.btn-success.buy-500');

};
