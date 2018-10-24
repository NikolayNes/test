import { $, browser, ElementFinder } from 'protractor';

export class MainPage {
    linkVittoRossi: ElementFinder = $('a[href*="brand-vitto"]');
    advancedSearchForShoes: ElementFinder = $('a[href*="products_search"]');
    imgComodoSecure: ElementFinder = $('.secure>img');
    linkManShoes: ElementFinder = $('h1 a[href="c-man.html"]');
    linkWomenShoes: ElementFinder = $('h1 a[href="c-women.html"]');
    linkBags: ElementFinder = $('a[href*="c-other_bags"]');
    basketButton: ElementFinder = $('.basket_panel_link');

    navigate() {
        return browser.get('/');
    }

    clickManShoes() {
        return this.linkManShoes.click();
    }

    clickWomenShoes() {
        return this.linkWomenShoes.click();
    }

    clickBags() {
        return this.linkBags.click();
    }

    waitForLoading(timeSec: number) {
        return browser.sleep(timeSec * 1000);
    }
}

