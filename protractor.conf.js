const config = require('dotenv');
const c = config.load({path: '.env'});
const SpecReporter = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    allScriptsTimeout: 21000,
    specs: [
        './e2e/**/*.e2e.ts'
    ],
    baseUrl: process.env.INSTANCE,
    multiCapabilities: [{
        'browserName': 'chrome'
    }
    ],
    params: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    },
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    beforeLaunch: () => {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({ savePath: 'reports/screenshots'}));
    }
};
