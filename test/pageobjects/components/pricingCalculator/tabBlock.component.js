/* eslint-disable max-len */
const BaseComponent = require('../common/base.component');
const ComputeEngineFormComponent = require('./tabBlock/computeEngineForm.component');

class TabBlockComponent extends BaseComponent {
    constructor() {
        super('//div[@ng-if="listingCtrl.activeTabs == tab.block"]');
        this.computeEngineForm = new ComputeEngineFormComponent();
    };

    get addToEstimate() {
        return this.rootEl('button[aria-label="Add to Estimate"]');
    }
};

module.exports = TabBlockComponent;