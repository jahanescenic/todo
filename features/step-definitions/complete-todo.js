module.exports = function () {
  
    this.Then(/^I complete todo "([^"]*)"$/, async function (todotask) {
        await page.updateTodoPage.checkExist("Active",todotask).then(async function(){
            await page.updateTodoPage.completeTodo(todotask).then(function(){
                return page.updateTodoPage.checkExist("Complete",todotask)
            })
        })     
    });   
  };