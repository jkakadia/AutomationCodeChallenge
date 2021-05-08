import { by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class homePage{

// Text Box
firstNameTxt:ElementFinder;
lastNameTxt:ElementFinder;
userNameTxt:ElementFinder;
passwordTxt:ElementFinder;
emailTxt:ElementFinder;
cellPhoneTxt:ElementFinder;

// Radio Buttons
customerRadioLables:ElementArrayFinder;
customerRadioBtns:ElementArrayFinder;

//Select Drop Down Box
roleSelect:ElementFinder;
roleOptions:ElementArrayFinder;

// Buttons
addUserBtn:ElementFinder;
okBtn : ElementFinder;
saveBtn:ElementFinder;

// Table
tableRows:ElementArrayFinder;
firstNameColumnValues:ElementArrayFinder;
lastNameColumnValues:ElementArrayFinder;
userNameColumnValues:ElementArrayFinder;
emailColumnValues:ElementArrayFinder;
customerColumnValues:ElementArrayFinder;
deleteButtonColumnValues:ElementArrayFinder;



    constructor(){

        this.addUserBtn = element(by.css("button[type='add']"));
        this.firstNameTxt = element(by.name("FirstName"));
        this.lastNameTxt = element(by.name("LastName"));
        this.userNameTxt = element(by.name("UserName"));
        this.passwordTxt = element(by.name("Password"));
        this.customerRadioLables = element.all(by.repeater("option in column.options"));
        this.customerRadioBtns = element.all(by.name("optionsRadios"));
        this.roleSelect = element(by.name("RoleId"));
        this.roleOptions = this.roleSelect.all(by.tagName("option"));
        this.emailTxt = element(by.name("Email"));
        this.cellPhoneTxt = element(by.name("Mobilephone"));
        this.saveBtn = element(by.css("button[class*='btn-success']"));
        this.tableRows = element.all(by.repeater("dataRow in displayedCollection"));
        this.userNameColumnValues = element.all(by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(3)"));
        this.firstNameColumnValues = element.all(by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(1)"));
        this.lastNameColumnValues = element.all(by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(2)"));
        this.emailColumnValues = element.all(by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(7)"));
        this.customerColumnValues = element.all(by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(5)"));
        this.deleteButtonColumnValues = element.all(by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(11) > button"));
        this.okBtn = element.all(by.repeater("btn in buttons")).get(1);
    }
}