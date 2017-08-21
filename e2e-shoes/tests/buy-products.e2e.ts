import {MainPage} from "../pages/main.po";
import {UserLogin} from "../pages/user-login.po";
import {browser} from "protractor";
import {CMan} from "../pages/c-man.po";
import {CManBoots} from "../pages/c-man_boots.po";
import {CManBoots12869} from "../pages/c-man_boots12869.po";



describe('Buy products', ()=>{
    let mainPage = new MainPage();
    let userLogin = new UserLogin();
    let cMan = new CMan();
    let cManBoots = new CManBoots();
    let cManBoots12869 = new CManBoots12869();

    beforeAll(()=> {
        mainPage.navigateTo();
    });



    it ('check that user logged in', ()=> {
        mainPage.login.click();
        userLogin.inputEmail.sendKeys("test19891307@gmail.com");
        userLogin.inputPassword.sendKeys('qwerty12345');
        userLogin.buttonSubmit.click();
        expect(browser.getCurrentUrl()).toContain("user_area.php");

    });
    it("Put product to bucket",()=> {
        mainPage.navigateTo();
        mainPage.linkManShoes.click();
        cMan.linkBoots.click();
        cManBoots.linkManBoots.click();
        cManBoots12869.fieldSize.click();
        cManBoots12869.selectSize.click();
        cManBoots12869.buyButton.click();
        expect(browser.getCurrentUrl()). toContain('products_basket_list.php');





    });

});









