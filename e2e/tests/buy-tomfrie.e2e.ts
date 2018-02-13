import { browser } from 'protractor';
import { DetailsShoesPage } from '../pages/details-shoes.po';
import { BrandTomfriePage } from '../pages/brand-tomfrie.po';
import { BasketPage } from '../pages/basket.po';
import { LoginPage } from '../pages/login.po';

describe('Registered user: buy Tomfrie: ', () => {
    let brandTomfriePage = new BrandTomfriePage();
    let loginPage = new LoginPage();
    let detailsShoesPage = new DetailsShoesPage();
    let basketPage = new BasketPage();

    beforeAll(() => {
        loginPage.navigateTo();
        loginPage.login();
    });

    it('Specific position Tomfrie put to basket', () => {
        brandTomfriePage.navigateToProductID(process.env.PRODUCTID);
        detailsShoesPage.selectSizeAndBuyShoes();

        expect(browser.getCurrentUrl()).toContain('products_basket_list.php');
        expect(basketPage.basketList.count()).toBeGreaterThan(1);
    });

    it('Third position Tomfrie confirm', () => {
        basketPage.confirmButton.click();
        basketPage.fillBusketOrder();
        basketPage.confirmOrderButton.click();

        expect(browser.getCurrentUrl()).toContain('user_orders_success.php');
        expect(basketPage.successh1.getText()).toEqual('Заказ оформлен');
        expect(basketPage.successMessage.getText()).toContain('Заказ успешно оформлен');
    });
});









