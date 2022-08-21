const {page} = require('../pageobjects/pages/index');

describe('Test', function() {
    it('should open page', async () => {
        await page('home').open();
        await page('home').header
            .input('searchField')
            .setValue('Google Cloud Platform Pricing Calculator');
        await page('home').header.submitEnter();

        await page('searchResults').searchItems
            .itemRef('Google Cloud Platform Pricing Calculator').click();

        const f1 = await $('//devsite-iframe//iframe');
        await browser.switchToFrame(f1);
        const f2 = await $('#myFrame');
        await browser.switchToFrame((f2));
        await page('pricingCalculator').tabs
            .itemIcon('COMPUTE ENGINE').click();
    });
});

