import {PhotoTechPage} from "../pages/phototech.po";

describe('Phototech page Servicecenter', () => {
    let photoTechPage = new PhotoTechPage();

    beforeAll(() => {
        photoTechPage.navigateTo();
    });

    it('check header', () => {
        expect(photoTechPage.getH1Text()).toEqual('Фототехника - ремонт');
    });

    it('check length small menu', () => {
        expect(photoTechPage.getArrayLength(photoTechPage.smallMenuArray)).toEqual(9);
    });

    it('check length small menu', () => {
        expect(photoTechPage.getArrayLength(photoTechPage.smallMenuArray)).toEqual(9);
    });

    it('check visibility elms of  big menu', () => {
        photoTechPage.bigMenuArray.each((subMenu)=>{
            expect(subMenu.isDisplayed()).toBeTruthy();
        });
    });

});