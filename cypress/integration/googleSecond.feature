Feature: Google search second feature
 Opening a search engine pages

  Scenario: Opening a search engine page
    Given I open Google page
    When I search for different keyword
    Then I should get search result

    Scenario: Search with different keyword 1
    Given I open Google page
    When I search for different keyword
    Then I should get search result

    Scenario:  Search with different keyword 2
    Given I open Google page
    When I search for different keyword
    Then I should get search result