module.exports = function () {

  this.Then(/^I create todo "([^"]*)"$/, async function (todotask) {
    await page.createTodoPage.createTodo(todotask)
  });
  
};