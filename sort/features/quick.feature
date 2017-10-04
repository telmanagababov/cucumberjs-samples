Feature: Quick Sort
    In order to sort arrays
    As a developer
    I want to have an Util class

    Background:
        Given a new data holder of 'QuickSort' type

    Scenario: Original data
        When data set to '1, 10, 12, 6, 3'
        Then data should be unchanged.
    
    Scenario Outline: Sorting data
        When data set to <data>
        Then sortedData should be equal to <sortedData>

        Examples:
            | data          | sortedData   |
            | '7, 3'        | '3, 7'       |
            | '8, 4, 7'     | '4, 7, 8'    |
            | '2, 5, 3, 1'  | '1, 2, 3, 5' |