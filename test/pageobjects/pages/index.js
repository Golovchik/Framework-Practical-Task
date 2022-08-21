const HomePage = require('./home.page');
const SearchResultsPage = require('./searchResults.page');
const PricingCalculator = require('./pricingCalculator.page');

function page(name) {
    const items = {
        home: new HomePage(),
        searchResults: new SearchResultsPage(),
        pricingCalculator: new PricingCalculator(),
    };
    return items[name];
};

module.exports = {
    page,
    HomePage,
    SearchResultsPage,
    PricingCalculator,
};