import { browser, protractor } from 'protractor';
import { ManWomanShoesPage } from '../pages/man-women-shoes.po';
import { DetailsShoesPage } from '../pages/details-shoes.po';
import { MainPage } from '../pages/main.po';
import { BasketPage } from '../pages/basket.po';

describe('Non registered user: putting products to the basket: ', () => {
    let mainPage = new MainPage();
    let manShoesPage = new ManWomanShoesPage();
    let detailsShoesPage = new DetailsShoesPage();
    let basketPage = new BasketPage();

    beforeAll(() => {
        mainPage.navigate();
    });

    afterAll(() => {
        protractor.browser.manage().deleteAllCookies();
    });

    it('First position in ManShoes Page', () => {
        mainPage.clickManShoes();
        let brandName = manShoesPage.getBrandName(manShoesPage.firstProduct);
        manShoesPage.firstProduct.click();
        detailsShoesPage.selectSizeAndBuyShoes();

        expect(browser.getCurrentUrl()).toContain('products_basket_list.php');
        expect(basketPage.basketList.count()).toBe(2);
        expect(basketPage.basketList.first().getText()).toContain(brandName);
    });

    it('Third position in ManShoes Page', () => {
        mainPage.navigate();
        mainPage.clickManShoes();
        let brandName = manShoesPage.getBrandName(manShoesPage.thirdProduct);
        manShoesPage.thirdProduct.click();
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









