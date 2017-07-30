import {$, $$, browser, ElementArrayFinder} from "protractor";

export class PhotoTechPage {
    smallMenuArray: ElementArrayFinder = $$('.menu_bcenter a');
    bigMenuArray: ElementArrayFinder = $$('.menu_big a');

    navigateTo(){
        browser.get('/c-foto.html');
    }

    getH1Text() {
        return $('.header h1').getText();
    }

    getArrayLength(elementArray: ElementArrayFinder) {
        return elementArray.count();}
}