
import { Given, Then, When } from "@cucumber/cucumber";
import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { homePage } from "../page-objects/homePage";
import { expect } from "chai";

let hp = new homePage();

Given('I am navigated to {string} page', async (url) => {
    await browser.get(url);
});

When('I click Add User button', async () => {
    await hp.addUserBtn.click();
});

When('Enters {string} as First Name', async (firstName) => {
    await hp.firstNameTxt.sendKeys(firstName);
});
When('Enters {string} as Last Name', async (lastName) => {
    await hp.lastNameTxt.sendKeys(lastName);
});

When('Enters {string} as User Name', async (userName) => {
    await hp.userNameTxt.sendKeys(userName);
});

When('Enters {string} as Password', async (password) => {
    await hp.passwordTxt.sendKeys(password);
});

When('Selects {string} as Customer', async (customer) => {
    for (var i = 0; i < await hp.customerRadioLables.count(); i++) {
        if (await hp.customerRadioLables.get(i).getText() == customer) {
            await hp.customerRadioBtns.get(i).click();
        }
    }
});

When('Selects {string} as Role', async (role) => {
    hp.roleSelect.click();
    for (var i = 0; i < await hp.roleOptions.count(); i++) {
        if (await hp.roleOptions.get(i).getText() == role) {
            await hp.roleOptions.get(i).click();
        }
    }
});

When('Enters {string} as Email Address', async (email) => {
    await hp.emailTxt.sendKeys(email);
});

When('Enters {string} as Cell Phone', async (cellPhone) => {
    await hp.cellPhoneTxt.sendKeys(cellPhone);
});

When('Click Save button', async () => {
    await hp.saveBtn.click();
});

Then('Validate user with {string}, {string}, {string} and {string} is added successfully', async (firstName, lastName, userName, email) => {
    expect(await hp.firstNameColumnValues.first().getText()).to.equal(firstName);
    expect(await hp.lastNameColumnValues.first().getText()).to.equal(lastName);
    expect(await hp.userNameColumnValues.first().getText()).to.equal(userName);
    expect(await hp.emailColumnValues.first().getText()).to.equal(email);
});

Then('Validate Customer filed for user is {string}', async (customer) =>{
    expect(await hp.customerColumnValues.first().getText()).to.equal(customer);
});

