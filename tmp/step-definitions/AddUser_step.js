"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const homePage_1 = require("../page-objects/homePage");
const chai_1 = require("chai");
let hp = new homePage_1.homePage();
cucumber_1.Given('I am navigated to {string} page', (url) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(url);
}));
cucumber_1.When('I click Add User button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.addUserBtn.click();
}));
cucumber_1.When('Enters {string} as First Name', (firstName) => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.firstNameTxt.sendKeys(firstName);
}));
cucumber_1.When('Enters {string} as Last Name', (lastName) => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.lastNameTxt.sendKeys(lastName);
}));
cucumber_1.When('Enters {string} as User Name', (userName) => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.userNameTxt.sendKeys(userName);
}));
cucumber_1.When('Enters {string} as Password', (password) => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.passwordTxt.sendKeys(password);
}));
cucumber_1.When('Selects {string} as Customer', (customer) => __awaiter(void 0, void 0, void 0, function* () {
    for (var i = 0; i < (yield hp.customerRadioLables.count()); i++) {
        if ((yield hp.customerRadioLables.get(i).getText()) == customer) {
            yield hp.customerRadioBtns.get(i).click();
        }
    }
}));
cucumber_1.When('Selects {string} as Role', (role) => __awaiter(void 0, void 0, void 0, function* () {
    hp.roleSelect.click();
    for (var i = 0; i < (yield hp.roleOptions.count()); i++) {
        if ((yield hp.roleOptions.get(i).getText()) == role) {
            yield hp.roleOptions.get(i).click();
        }
    }
}));
cucumber_1.When('Enters {string} as Email Address', (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.emailTxt.sendKeys(email);
}));
cucumber_1.When('Enters {string} as Cell Phone', (cellPhone) => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.cellPhoneTxt.sendKeys(cellPhone);
}));
cucumber_1.When('Click Save button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield hp.saveBtn.click();
}));
cucumber_1.Then('Validate user with {string}, {string}, {string} and {string} is added successfully', (firstName, lastName, userName, email) => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield hp.firstNameColumnValues.first().getText()).to.equal(firstName);
    chai_1.expect(yield hp.lastNameColumnValues.first().getText()).to.equal(lastName);
    chai_1.expect(yield hp.userNameColumnValues.first().getText()).to.equal(userName);
    chai_1.expect(yield hp.emailColumnValues.first().getText()).to.equal(email);
}));
cucumber_1.Then('Validate Customer filed for user is {string}', (customer) => __awaiter(void 0, void 0, void 0, function* () {
    chai_1.expect(yield hp.customerColumnValues.first().getText()).to.equal(customer);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVXNlcl9zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcC1kZWZpbml0aW9ucy9BZGRVc2VyX3N0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxpREFBdUQ7QUFDdkQsMkNBQXFGO0FBQ3JGLHVEQUFvRDtBQUNwRCwrQkFBOEI7QUFFOUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFFeEIsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBQ25ELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7SUFDdkMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTyxTQUFTLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUNwRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUNwRCxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJ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