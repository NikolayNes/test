import { MainPage } from '../pages/main.po';

describe('MainPage', () => {
    let mainPage = new MainPage();

    beforeAll(() => {
        mainPage.navigate();
    });

    it('Text basket element', () => {
        expect(mainPage.basketButton.getText()).toEqual('Корзина');
    });

    it('Exist link Vitto Rossi', () => {
        expect(mainPage.linkVittoRossi.isDisplayed()).toBe(true);
    });

    it('Exist link Advanced search', () => {
        expect(mainPage.advancedSearchForShoes.getText()).toEqual('Расширенный поиск обуви');
    });

    it('Exist comodo img', () => {
        expect(mainPage.imgComodoSecure.isDisplayed()).toBeTruthy();
    });
});
