const BaseComponent = require('../common/base.component');
const ComputeEngineEstimateComponent = require('./estimateBlock/computeEngineEstimate.component');

class EstimateBlocComponent extends BaseComponent {
    constructor() {
        super('#resultBlock"]');
        this.ComputeEngineEstimate = new ComputeEngineEstimateComponent();
    };
};

module.exports = EstimateBlocComponent;