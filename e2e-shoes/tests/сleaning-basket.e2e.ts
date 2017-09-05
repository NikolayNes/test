import {BasketList} from "../pages/basket-list.po";
import {browser} from "protractor";
import {MainPage} from "../pages/main.po";

describe('Cleaning basket', ()=> {

    let mainPage = new MainPage();
    let basketList = new BasketList();

    beforeAll(()=> {
        basketList.navigateTo();

    });

    it('Cleaning the basket', ()=> {

        expect(browser.getCurrentUrl()).toContain('products_basket_list.php');

        basketList.deleteProductFromBasket.click();

    });



});