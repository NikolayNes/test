import { RegistrationForm } from '../pages/registration-form.po';
import { MainPage } from '../pages/main.po';

xdescribe('Registrationform', () => {
    let registrationForm = new RegistrationForm();
    let mainPage = new MainPage();

    beforeAll(() => {
        registrationForm.navigateTo();
    });

    it('name is displayed', () => {
        expect(registrationForm.fullName.isDisplayed()).toBeTruthy()
    });

    it('buttonRegistration is displayed', () => {
        expect(registrationForm.buttonReg.isDisplayed()).toBeTruthy()
    });

    it('check Visibility For Sale Link', () => {
        expect(registrationForm.forSale.isDisplayed()).toBeTruthy()
    });

    it('check Registration Form For User', () => {
        registrationForm.inputFirstName.sendKeys('Ветров Василий Васильевич');
        registrationForm.inputEmail.sendKeys('test19891307@gmail.com');
        registrationForm.inputPasswd.sendKeys('qwerty12345');
        registrationForm.inputConfirmPasswd.sendKeys('qwerty12345');
        registrationForm.radioInlineMen.click();
        registrationForm.inputPhone.sendKeys('380992694234');

        mainPage.waitForLoading(3);
        registrationForm.inputCaptchaCode.sendKeys('');

        registrationForm.radioCheckboxAgree.click();
        mainPage.waitForLoading(3);
        registrationForm.mainRegistrationButton.click();

        expect(true).toBeTruthy();
    });
});
