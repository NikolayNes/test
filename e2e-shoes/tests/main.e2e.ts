import {MainPage} from "../pages/main.po";

describe('MainPage', ()=> {
    let mainPage = new MainPage();
    beforeAll(()=> {
        mainPage.navigateTo();
    });

    it('text basket element', ()=> {
    expect(mainPage.getBasketText()).toEqual('Корзина');
    });

    it('exist link Vitto Rossi',()=> {
       expect(mainPage.linkVittoRossi.isDisplayed()).toBe(true);
    });

    it('exist link Advanced search', ()=>{
        expect (mainPage.advancedSearchForShoes.getText()).toEqual('Расширенный поиск обуви');
    });

    it('exist comodo img', ()=>{
        expect(mainPage.imgComodoSecure.isDisplayed()).toBeTruthy();
    });


});
