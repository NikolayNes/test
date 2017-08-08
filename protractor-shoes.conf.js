const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 21000,
    specs: [
        './e2e-shoes/**/*.e2e.ts'
    ],
    baseUrl: 'http://shoes.ua',
    multiCapabilities: [{
        'browserName': 'chrome'
    }
    ],
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e-shoes'
        });
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}
