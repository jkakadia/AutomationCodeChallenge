"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const protractor_1 = require("protractor");
class homePage {
    constructor() {
        this.addUserBtn = protractor_1.element(protractor_1.by.css("button[type='add']"));
        this.firstNameTxt = protractor_1.element(protractor_1.by.name("FirstName"));
        this.lastNameTxt = protractor_1.element(protractor_1.by.name("LastName"));
        this.userNameTxt = protractor_1.element(protractor_1.by.name("UserName"));
        this.passwordTxt = protractor_1.element(protractor_1.by.name("Password"));
        this.customerRadioLables = protractor_1.element.all(protractor_1.by.repeater("option in column.options"));
        this.customerRadioBtns = protractor_1.element.all(protractor_1.by.name("optionsRadios"));
        this.roleSelect = protractor_1.element(protractor_1.by.name("RoleId"));
        this.roleOptions = this.roleSelect.all(protractor_1.by.tagName("option"));
        this.emailTxt = protractor_1.element(protractor_1.by.name("Email"));
        this.cellPhoneTxt = protractor_1.element(protractor_1.by.name("Mobilephone"));
        this.saveBtn = protractor_1.element(protractor_1.by.css("button[class*='btn-success']"));
        this.tableRows = protractor_1.element.all(protractor_1.by.repeater("dataRow in displayedCollection"));
        this.userNameColumnValues = protractor_1.element.all(protractor_1.by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(3)"));
        this.firstNameColumnValues = protractor_1.element.all(protractor_1.by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(1)"));
        this.lastNameColumnValues = protractor_1.element.all(protractor_1.by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(2)"));
        this.emailColumnValues = protractor_1.element.all(protractor_1.by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(7)"));
        this.customerColumnValues = protractor_1.element.all(protractor_1.by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(5)"));
        this.deleteButtonColumnValues = protractor_1.element.all(protractor_1.by.css("tr[ng-repeat='dataRow in displayedCollection'] > td:nth-child(11) > button"));
        this.okBtn = protractor_1.element.all(protractor_1.by.repeater("btn in buttons")).get(1);
    }
}
exports.homePage = homePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlLW9iamVjdHMvaG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsUUFBUTtJQWtDakI7UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLHFCQUFxQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyx3QkFBd0IsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRFQUE0RSxDQUFDLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0o7QUF6REQsNEJBeURDIn0=