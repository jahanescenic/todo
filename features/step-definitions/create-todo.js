module.exports = function () {
  //import {createTodo} from "../page-objects/create-todo-page"

  this.Then(/^I create todo "([^"]*)"$/, function (todotask) {
    return page.createTodoPage.createTodo(todotask)
  });
  
};