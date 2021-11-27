Feature: Create a TODO task
  The first test to check the connection

  Background: Visit the TODOMVC App
    Given I go to "http://todomvc.com/examples/react/#/"
  
  Scenario Outline: Create a TODO task
    Then I create todo "<list>"

    Examples:
        | list | 
        | washing  |
        | cooking |
        | dancing |
        