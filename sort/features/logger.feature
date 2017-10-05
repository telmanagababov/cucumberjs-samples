Feature: Logger
    In order to have logs
    As a customer
    I want to have a logging functionality

    Scenario Outline: Loggging
        Given a new logger of type <type> is created
        When logged data <data>
        Then should log <loggedData>

        Examples:
            | type   | data        | loggedData                     |
            | 'log'  |'test'       |'level: log, data: test'        |
            | 'info' |'test, test' |'level: info, data: test, test' |