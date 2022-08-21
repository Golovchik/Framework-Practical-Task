/* eslint-disable max-len */
const BaseComponent = require('../../common/base.component');

class ComputeEngineFormComponent extends BaseComponent {
    constructor() {
        super('form[name=ComputeEngineForm]');
    };

    item(name) {
        const selectors = {
            numberOfInstancesInput: '#input_2099',
            whatAreTheseInstancesInput: '#input_2100',

            operatingSystemSelect: '#select_value_label_2091',

            classVMSelect: '#select_value_label_2092',

            instanceSerieSelect: '#select_value_label_82',
            instanceTypeSelect: '#select_value_label_83',

            instanceTypeCheckbox: '[ng-model="listingCtrl.computeServer.addGPUs"]',

            typeOfGPUSelect: 'select_value_label_457',

            numberOfGPUsSelect: 'select_value_label_458',

            localSSDSelect: 'select_value_label_415',

            datacenterlocationSelect: 'select_value_label_85',

            commitedUsageSelect: 'select_value_label_86',

        };
        return this.rootEl(selectors[name]);
    };
}

module.exports = ComputeEngineFormComponent;