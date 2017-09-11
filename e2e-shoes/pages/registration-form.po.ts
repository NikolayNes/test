import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";

export class RegistrationForm {

    fullName: ElementFinder = $$('.form-control').first();

    buttonReg: ElementFinder = $$('.btn').first();

    forSale: ElementFinder = $('.col-sm-2.hidden-xs.foot_link>a');

    inputFirstName: ElementFinder = $('*[class="form-control"][name="firstname"]');

    inputEmail: ElementFinder = $('*[class="form-control"][name="email"]');

    inputPasswd: ElementFinder = $('*[class="form-control"][name="passwd"]');

    inputPasswd2: ElementFinder = $('*[class="form-control"][name="passwd2"]');

    radioInlineMen: ElementFinder = $$('.radio-inline>input').first();

    inputPhone: ElementFinder = $('*[class="form-control"][name="phone"]');

    inputCaptchaCode: ElementFinder = $('*[class="form-control"][name="captcha_code"]');

    radioCheckboxAgree: ElementFinder = $$('.checkbox>label>input').last();

    mainRegistrationButton: ElementFinder = $$('.btn').last();


    navigateTo() {
        return browser.get('/user_reg.php');
    }


}