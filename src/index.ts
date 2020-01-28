import WDIOReporter from "@wdio/reporter";
import chalk from "chalk";

interface Test {
  fullTitle: string;
}

class TestNameReporter extends WDIOReporter {
  constructor(options) {
    options = Object.assign(options, { stdout: true });
    super(options);
  }

  onTestStart(test: Test): void {  
    console.log(`${chalk.cyan('RUNNING TEST')} in ${browser.capabilities.browserName} - ${test.fullTitle}`);
  }

  onTestPass(test: Test): void {
    console.log(`${chalk.green('PASSED TEST')} in ${browser.capabilities.browserName} - ${test.fullTitle}`);
  }

  onTestFail(test: Test): void {
    console.log(`${chalk.red('FAILED TEST')} in ${browser.capabilities.browserName} - ${test.fullTitle}`);
  }
  onTestSkip(test: Test): void {
    console.log(`${chalk.yellow('SKIPPED TEST')} in ${browser.capabilities.browserName} - ${test.fullTitle}`);
  }
}

export default TestNameReporter;