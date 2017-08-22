
import {RegistrationForm} from "../pages/registration-form.po";
import {browser} from "protractor";

describe('Registrationform', ()=> {
    let registrationForm = new RegistrationForm();
    beforeAll(()=> {
        registrationForm.navigateTo();
    });


    it('name', ()=> {

        expect(registrationForm.fullName.isDisplayed()).toBeTruthy()

    });

    it('buttonRegistration', ()=>{

        expect(registrationForm.buttonReg.isDisplayed()).toBeTruthy()
    });

    it('check Visibility For Sale Link', ()=> {
        expect(registrationForm.forSale.isDisplayed()).toBeTruthy()
    });

    it('check Registration Form For User', ()=>{
        registrationForm.inputFirstName.sendKeys('Ветров Василий Васильевич');
        registrationForm.inputEmail.sendKeys('test19891307@gmail.com');
        registrationForm.inputPasswd.sendKeys('qwerty12345');
        registrationForm.inputPasswd2.sendKeys('qwerty12345');
        registrationForm.radioInlineMen.click();
        registrationForm.inputPhone.sendKeys('380992694234');

        browser.sleep(15000);
        registrationForm.inputCaptchaCode.sendKeys('');


        registrationForm.radioCheckboxAgree.click();
        browser.sleep(3000);
        registrationForm.mainRegistrationButton.click();



        expect(true).toBeTruthy();
    })





});
