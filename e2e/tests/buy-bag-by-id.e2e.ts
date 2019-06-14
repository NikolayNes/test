import { browser } from 'protractor';
import { DetailsShoesPage } from '../pages/details-shoes.po';
import { BrandTomfriePage } from '../pages/brand-tomfrie.po';
import { BasketPage } from '../pages/basket.po';
import { LoginPage } from '../pages/login.po';

describe('Registered user: buy Bag: ', () => {
    let commonPage = new BrandTomfriePage();
    let loginPage = new LoginPage();
    let detailsPage = new DetailsShoesPage();
    let basketPage = new BasketPage();

    beforeAll(() => {
        loginPage.navigateTo();
        loginPage.login();
    });

    it('Specific position of bag put to basket', () => {
        if (process.env.BAGID) {
          commonPage.navigateToProductID(process.env.BAGID);
          detailsPage.buySelectedItem();

          expect(browser.getCurrentUrl()).toContain('products_basket_list.php');
          expect(basketPage.basketList.count()).toBeGreaterThan(1);
        }
    });

    it('Confirm and send order', () => {
      if (process.env.BAGID) {
        basketPage.confirmButton.click();
        basketPage.fillBusketOrder();
        basketPage.confirmOrderButton.click();

        expect(browser.getCurrentUrl()).toContain('user_orders_success.php');
        expect(basketPage.successh1.getText()).toEqual('Заказ оформлен');
        expect(basketPage.successMessage.getText()).toContain('Заказ успешно оформлен');
      }
    });
});









