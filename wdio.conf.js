const testnameReporter = require('./dist/index').default;

exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    protocol: 'http',
    specs: [
        'test/ui/*.spec.js'
    ],
    maxInstances: 2,
    maxInstancesPerCapability: 2,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.example.org',
    waitforTimeout: 10000,
    framework: 'jasmine',
    reporters: [testnameReporter],
    services: [],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000,
        expectationResultHandler: function(passed, assertion) {
            // do something
        },
        grep: null,
        invertGrep: null
    },
}