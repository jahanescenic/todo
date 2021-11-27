Feature: Complete a TODO task
  Create a new todo task

  Background: Create a TODO task
    Given I go to "http://todomvc.com/examples/react/#/"
    And I create todo "washing"
  
  Scenario: Complete a TODO task
    Then I complete todo "washing"

 