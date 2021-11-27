module.exports = function () {
    
    this.Given(/^I go to "([^"]*)"$/, async function (uri) {
        await helpers.loadPage(uri)
    });

};