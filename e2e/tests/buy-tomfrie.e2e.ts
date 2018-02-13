import { browser, protractor } from 'protractor';
import { ManWomanShoesPage } from '../pages/man-women-shoes.po';
import { DetailsShoesPage } from '../pages/details-shoes.po';
import { BrandTomfriePage } from '../pages/brand-tomfrie.po';
import { BasketPage } from '../pages/basket.po';

describe('Non registered user: putting Tomfrie to the basket: ', () => {
    let brandTomfriePage = new BrandTomfriePage();
    let manShoesPage = new ManWomanShoesPage();
    let detailsShoesPage = new DetailsShoesPage();
    let basketPage = new BasketPage();

    beforeAll(() => {
        brandTomfriePage.navigate();
    });

    afterAll(() => {
        protractor.browser.manage().deleteAllCookies();
    });

    it('First position in Tomfrie brand Page', () => {
        let brandName = brandTomfriePage.getBrandName(brandTomfriePage.firstProduct);
        brandTomfriePage.firstProduct.click();
        detailsShoesPage.selectSizeAndBuyShoes();

        expect(browser.getCurrentUrl()).toContain('products_basket_list.php');
        expect(basketPage.basketList.count()).toBe(2);
        expect(basketPage.basketList.first().getText()).toContain(brandName);
    });

    it('Third position in Tomfrie brand Page', () => {
        brandTomfriePage.navigate();
        let brandName = brandTomfriePage.getBrandName(brandTomfriePage.thirdProduct);
        brandTomfriePage.thirdProduct.click();
        detailsShoesPage.selectSizeAndBuyShoes();

        expect(browser.getCurrentUrl()).toContain('products_basket_list.php');
        expect(basketPage.basketList.count()).toBe(3);
        expect(basketPage.basketList.get(1).getText()).toContain(brandName);

    });

    it('Cleaning the basket', () => {
        basketPage.removeProduct(basketPage.basketList.get(1));
        basketPage.removeProduct(basketPage.basketList.first());

        expect(basketPage.basketIsEmpty.getText()).toContain('Корзина пуста.');
    });
});









