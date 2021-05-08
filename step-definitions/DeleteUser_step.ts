import { Given, Then, When } from "@cucumber/cucumber";
import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { homePage } from "../page-objects/homePage";
import { expect } from "chai";


let hp = new homePage();

When('I delete the user with User Name {string}', async (userName) => {
    for (let i = 0; i < await hp.userNameColumnValues.count(); i++) {
        if (await hp.userNameColumnValues.get(i).getText() == userName) {
            await hp.deleteButtonColumnValues.get(i).click();
            await hp.okBtn.click();
        }
    }
});

Then('Validate user with User Name {string} is deleted successfully', async (userName) => {
    for (let i = 0; i < await hp.userNameColumnValues.count(); i++) {
        expect(await hp.userNameColumnValues.get(i).getText()).to.not.equal(userName);
    }
});