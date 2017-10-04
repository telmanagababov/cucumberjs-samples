@dev
Feature: Merge Sort
    In order to sort arrays
    As a developer
    I want to have an Util class

    Background:
        Given a new data holder of 'MergeSort' type

    Scenario: Original data
        When data set to '1, 10, 12, 6, 3'
        Then data should be unchanged.

    Scenario: Sorted data
        When data set to
            | 1 | 10 | 12 | 6 | 3 |
        Then sortedData should be equal to '1, 3, 6, 10, 12'
