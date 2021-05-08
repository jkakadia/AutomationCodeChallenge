Feature: Automate
    As an Engr. Candidate I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
    So I can show my automation capabilities

    Scenario Outline: Add a user and validate the user has been added to the table
        Given I am navigated to 'http://www.way2automation.com/angularjs-protractor/webtables/' page
        When I click Add User button
        And Enters '<firstName>' as First Name
        And Enters '<lastName>' as Last Name
        And Enters '<userName>' as User Name
        And Enters '<password>' as Password
        And Selects '<customer>' as Customer
        And Selects '<role>' as Role
        And Enters '<email>' as Email Address
        And Enters '<cellPhone>' as Cell Phone
        And Click Save button
        Then Validate user with '<firstName>', '<lastName>', '<userName>' and '<email>' is added successfully

        Examples:
            | firstName | lastName | userName    | password  | customer    | role       | email          | cellPhone  |
            | Donald    | Trump    | donaldtrump | donald123 | Company AAA | Admin      | trump@test.com | 8889991111 |
            | Barak     | Obama    | barakobama  | obama123  | Company BBB | Sales Team | obama@test.com | 2224445555 |

# Senario to demonstrate failed scenario. Bug - Customer filed is not getting added to table
Scenario Outline: 
        Given I am navigated to 'http://www.way2automation.com/angularjs-protractor/webtables/' page
        When I click Add User button
        And Enters '<firstName>' as First Name
        And Enters '<lastName>' as Last Name
        And Enters '<userName>' as User Name
        And Enters '<password>' as Password
        And Selects '<customer>' as Customer
        And Selects '<role>' as Role
        And Enters '<email>' as Email Address
        And Enters '<cellPhone>' as Cell Phone
        And Click Save button
        Then Validate Customer filed for user is '<customer>'

        Examples:
            | firstName | lastName | userName    | password  | customer    | role       | email          | cellPhone  |
            | Donald    | Trump    | donaldtrump | donald123 | Company AAA | Admin      | trump@test.com | 8889991111 |


