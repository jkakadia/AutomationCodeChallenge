"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../features/*.feature'],
    cucumberOpts: {
        require: [
            './step-definitions/*.js'
        ]
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRVcsUUFBQSxNQUFNLEdBQVc7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsYUFBYSxFQUFFLElBQUk7SUFDbkIsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxLQUFLLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztJQUNoQyxZQUFZLEVBQUU7UUFDVixPQUFPLEVBQUU7WUFDTCx5QkFBeUI7U0FDNUI7S0FDSjtDQUNKLENBQUMifQ==