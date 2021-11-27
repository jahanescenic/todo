module.exports = {
    elements: {
        todoInput: by.css('.new-todo'),
    },
 
    // Create a TODO task with the task title
    createTodo: function (task) {
        var selector = page.createTodoPage.elements.todoInput;
        return driver.wait(until.elementsLocated(selector), 10000).then(function(){
            driver.findElements(selector);
            return driver.findElement(selector).sendKeys(task, selenium.Key.ENTER);
        })
    }
};
