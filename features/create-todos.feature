Feature: Go to todo app
  The first test to check the connection

  Background: Set up your functional environment
    Given I go to "http://todomvc.com/examples/react/#/"
  
  Scenario Outline: Create a todo list
    Then I create todo "<list>"

    Examples:
        | list | 
        | washing  |
        | cooking |
        | dancing |
        