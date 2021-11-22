module.exports = function () {
    this.Given(/^I go to "([^"]*)"$/, function (uri) {
 
        return helpers.loadPage(uri)
    });

};