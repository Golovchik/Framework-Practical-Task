const {page} = require('../pageobjects/pages/index');

describe('Test', function() {
    it('should open page', async () => {
        await page('home').open();
        await page('home').header
            .input('searchField')
            .setValue('Google Cloud Platform Pricing Calculator');
        await page('home').header.submit();

        await page('searchResults').searchItems
            .itemRef('Google Cloud Platform Pricing Calculator').click();

        //await browser.switchToWindow();
        //const f1 = await $('//devsite-iframe//iframe');
        //await browser.switchToFrame(f1);
        //const f2 = await $('#myFrame');
        //await browser.switchToFrame((f2));
        await page('pricingCalculator').goToFrames();
        await page('pricingCalculator').tabs
            .item('COMPUTE ENGINE').click();

        await page('pricingCalculator').getOutOfFrames();
        //const handles = await browser.getWindowHandles();
        //await browser.switchToWindow(handles[0]);
        //await browser.switchToParentFrame();
        //await browser.switchToParentFrame();
        //await browser.switchToParentFrame();
    });
});

