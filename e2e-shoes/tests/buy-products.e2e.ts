import {UserLogin} from "../pages/user-login.po";
import {browser, by, element} from "protractor";
import {CMan} from "../pages/c-man.po";
import {CManBoots} from "../pages/c-man_boots.po";
import {CManBoots12869} from "../pages/c-man_boots12869.po";
import {MainPage} from "../pages/main.po";
import {BasketList} from "../pages/basket-list.po";
import {until} from "selenium-webdriver";
import elementIsDisabled = until.elementIsDisabled;
import elementTextContains = until.elementTextContains;



describe('Buy products shoes', ()=>{
    let mainPage = new MainPage();
    let userLogin = new UserLogin();
    let cMan = new CMan();
    let cManBoots = new CManBoots();
    let cManBoots12869 = new CManBoots12869();
    let basketList = new BasketList();

    beforeAll(()=> {
        mainPage.navigateTo();
    });



    it ('check that user logged in', ()=> {
        mainPage.login.click();
        userLogin.inputEmail.sendKeys("test19891307@gmail.com");
        userLogin.inputPassword.sendKeys('qwerty12345');
        userLogin.buttonSubmit.click();

        expect(browser.getCurrentUrl()).toContain("user_area.php");

        browser.sleep(2000);

    });
    it("Put product to basket",()=> {
        mainPage.navigateTo();
        mainPage.linkManShoes.click();
        cMan.linkBoots.click();
        cManBoots.linkManBoots.click();
        cManBoots12869.fieldSize.click();
        cManBoots12869.selectSize.click();
        cManBoots12869.buyButton.click();

        expect(browser.getCurrentUrl()). toContain('products_basket_list.php');

        browser.sleep(2000); //checking Url


    });

    it('Cleaning the basket', ()=> {

        basketList.deleteProductFromBasket.click();

        browser.sleep(2000); //checking basket. Should be empty

        //expect(element(by.css('.fa.fa-times')).isDisplayed()).toBe(false);

        expect(basketList.basketIsEmpty.getText()).toContain('Корзина пуста.');

        browser.sleep(2000);


    });

});









