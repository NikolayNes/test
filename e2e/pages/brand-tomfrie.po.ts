import { $$, browser, ElementFinder } from 'protractor';

export class BrandTomfriePage {
    firstProduct: ElementFinder = $$('.bg-amount-0').first();
    thirdProduct: ElementFinder = $$('.bg-amount-0').get(2);

    navigate() {
        return browser.get('/brand-tomfrie.html');
    }

    navigateToProductID(productID: string) {
        return browser.get(browser.baseUrl + '/product/' + productID + '.html');
    }

    getBrandName(product: ElementFinder){
        return product.$('a').getText();
    }
}

