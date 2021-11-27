module.exports = {
    elements: {
        todoComplete: by.css('.toggle'),
    },

    // Check if the task exist in a particular state
    checkExist: async function (state, task) {
        var selector = by.xpath('//a[contains(text(), "'+state+'")]');
        var taskLabel = by.xpath('//label[contains(text(), "'+task+'")]')
        await driver.wait(until.elementsLocated(selector), 10000).then(function(){
            driver.findElement(selector).click()
            expect(driver.findElement(taskLabel));
        })
    }, 
    
    // Complete a task by checking out
    completeTodo: async function (task) {
        var selector = by.xpath('//label[contains(text(), "'+task+'")]//..//input[@class="toggle"]')
        await driver.wait(until.elementsLocated(selector), 10000).then(function(){
            driver.findElements(selector);
            return driver.findElement(selector).click()
        })
    }
};
