const BasePage = require('./base.page');
const TabsComponent = require('../components/pricingCalculator/tabs.component');

class PricingCalculator extends BasePage {
    constructor() {
        super('');
        this.tabs = new TabsComponent();
    }
}

module.exports = PricingCalculator;