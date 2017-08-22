import {UserLogin} from "../pages/user-login.po";
import {MainPage} from "../../e2e-shoes/pages/main.po";
import {browser} from "protractor";
import {CWomen} from "../pages/c-women.po";
import {CWomenFlipflops} from "../pages/c-women_flipflops.po";
import {CWomenFlipflops13218} from "../pages/c-women_flipflops13218.po";

describe("Buy products womens shoes", ()=> {

    let mainPage = new MainPage();
    let userLogin = new UserLogin();
    let cWomen = new CWomen();
    let cWomenFlipflops = new CWomenFlipflops();
    let cWomenFlipflop13218 = new CWomenFlipflops13218();



    beforeAll(()=> {
        mainPage.navigateTo();

    });


    it('check that user logged in',()=> {

        mainPage.login.click();
        userLogin.inputEmail.sendKeys("test19891307@gmail.com");
        userLogin.inputPassword.sendKeys('qwerty12345');
        userLogin.buttonSubmit.click();

        expect(browser.getCurrentUrl()).toContain('user_area.php');

    });

    it('Put product to bucket', ()=> {

        mainPage.navigateTo();
        mainPage.linkWomenShoes.click();
        cWomen.linkFlipflops.click();
        cWomenFlipflops.linkFlipFlop.click();
        cWomenFlipflop13218.fieldSize.click();
        cWomenFlipflop13218.selectSize.click();
        cWomenFlipflop13218.buyButton.click();



    });


});