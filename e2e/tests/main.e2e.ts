import {MainPage} from "../pages/main.po";

describe('Main page Servicecenter', () => {
    let mainPage = new MainPage();

    beforeAll(() => {
        mainPage.navigateTo();
    });
    it('check header', () => {
        expect(mainPage.getH1Text()).toEqual('Сервисные центры Украины');
    });

    it('check login form', () => {
        expect(mainPage.registrationForm.isDisplayed()).toBeTruthy();
    });

    it('check existing categories', () => {
        expect(mainPage.categoriesMain.count()).toEqual(8);
    });

    it('check each category', () => {
        const categories: Array<String> = ['Фототехника', 'Авто', 'Бытовая техника', 'Телефония и cвязь', 'Компьютерная техника', 'Аудиотехника', 'Видеотехника', 'Промышленное оборудование'];
        mainPage.categoriesMain.each((category, index) =>{
            expect(category.getText()).toContain(categories[index]);
        });
    });
});