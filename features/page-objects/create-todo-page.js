module.exports = {
 
    elements: {
        todoInput: by.css('.new-todo'),
    },
 
    createTodo: function (task) {
 
        var selector = page.createTodoPage.elements.todoInput;
        return driver.wait(until.elementsLocated(selector), 10000).then(function(){
 
            // return the promise of an element to the following then.
            driver.findElements(selector);
            return driver.findElement(selector).sendKeys(task, selenium.Key.ENTER);
        })
    }
};
