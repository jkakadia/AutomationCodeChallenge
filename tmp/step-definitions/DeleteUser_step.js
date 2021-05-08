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
const homePage_1 = require("../page-objects/homePage");
const chai_1 = require("chai");
let hp = new homePage_1.homePage();
cucumber_1.When('I delete the user with User Name {string}', (userName) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < (yield hp.userNameColumnValues.count()); i++) {
        if ((yield hp.userNameColumnValues.get(i).getText()) == userName) {
            yield hp.deleteButtonColumnValues.get(i).click();
            yield hp.okBtn.click();
        }
    }
}));
cucumber_1.Then('Validate user with User Name {string} is deleted successfully', (userName) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < (yield hp.userNameColumnValues.count()); i++) {
        chai_1.expect(yield hp.userNameColumnValues.get(i).getText()).to.not.equal(userName);
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlVXNlcl9zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcC1kZWZpbml0aW9ucy9EZWxldGVVc2VyX3N0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFFdkQsdURBQW9EO0FBQ3BELCtCQUE4QjtBQUc5QixJQUFJLEVBQUUsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUV4QixlQUFJLENBQUMsMkNBQTJDLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUcsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUEsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM1RCxJQUFJLENBQUEsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFJLFFBQVEsRUFBRTtZQUM1RCxNQUFNLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakQsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO0tBQ0o7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtEQUErRCxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDckYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFHLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFBLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUQsYUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pGO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9