# wdio-testname-reporter

Webdriver.io reporter that prints the current test name and result to the console instead of just the test suite name.  When running longer spec files, it is nice to see which test is currently running so you can gauge how far through the suite you have got.

## Without plugin

```bash
Execution of 1 spec files started at 2020-02-27T03:08:38.717Z

[0-0] RUNNING in chrome - test1.spec.js
[0-0] Error in "Test Suite 1 should fail"
Expected 'Example Domain' to be undefined.
[0-0] FAILED in chrome - test1.spec.js

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:03
```

## With plugin

```bash
Execution of 1 spec files started at 2020-02-27T03:07:30.486Z

[0-0] RUNNING in chrome - test1.spec.js
[0-0] RUNNING TEST in chrome - Test Suite 1 should pass
[0-0] PASSED TEST in chrome - Test Suite 1 should pass
[0-0] RUNNING TEST in chrome - Test Suite 1 should fail
[0-0] Error in "Test Suite 1 should fail"
Expected 'Example Domain' to be undefined.
[0-0] FAILED TEST in chrome - Test Suite 1 should fail
RUNNING TEST in chrome - Test Suite 1 should skip
[0-0] SKIPPED TEST in chrome - Test Suite 1 should skip
[0-0] FAILED in chrome - test1.spec.js

Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:04
```

## Installation

```bash
npm install wdio-testname-reporter --save-dev
```

or

```bash
yarn add wdio-testname-reporter --dev
```

## Configuration

Add the reporter to your wdio.conf

```javascript
reporters: ['testname'],
```

or if you want to turn off specific notifications, add with options (all are optional and default to true)

```javascript
reporters: [['testname', {
    Starting: true,
    Passed: true,
    Failed: true,
    Skipped: true,
}]],
```
