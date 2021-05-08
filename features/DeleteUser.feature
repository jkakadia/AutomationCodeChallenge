Feature: Automate
    As an Engr. Candidate I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
    So I can show my automation capabilities

    Scenario Outline: Delete user User Name: novak and validate user has been deleted
        Given I am navigated to 'http://www.way2automation.com/angularjs-protractor/webtables/' page
        When I delete the user with User Name '<userName>'
        Then Validate user with User Name '<userName>' is deleted successfully

        Examples:
            | userName |
            | novak    |