import { $$, ElementFinder } from 'protractor';

export class ManWomanShoesPage {

    firstProduct: ElementFinder = $$('.bg-amount-1').first();
    thirdProduct: ElementFinder = $$('.bg-amount-1').get(2);

    getBrandName(product: ElementFinder){
        return product.$('a').getText();
    }
}
