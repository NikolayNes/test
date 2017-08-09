
import {RegistrationForm} from "../pages/registration-form.po";

describe('Registrationform', ()=> {
    let registrationForm = new RegistrationForm();
    beforeAll(()=> {
        registrationForm.navigateTo();
    });


    it('name', ()=> {

        expect(registrationForm.fullName.isDisplayed()).toBeTruthy()

    })

    it('buttonRegistration', ()=>{

        expect(registrationForm.buttonReg.isDisplayed()).toBeTruthy()
    })



});
