import { Config } from 'protractor';

export let config: Config = {
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