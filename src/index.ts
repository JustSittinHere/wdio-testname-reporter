import WDIOReporter from "@wdio/reporter";
import chalk from "chalk";

export interface Options {
  Starting?: boolean;
  Passed?: boolean;
  Failed?: boolean;
  Skipped?: boolean;
}

class TestNameReporter extends WDIOReporter {
  private options: Options;

  constructor(options) {
    options = Object.assign(options, { stdout: true });
    super(options);
    this.options = options;
  }

  outputFormattedMessage(colour: (message: string) => void, text: string, test: WDIOReporter.Test): void {
    console.log(`${colour(text)} in ${browser.capabilities.browserName} - ${test.fullTitle}`);
  }

  onTestStart(test: WDIOReporter.Test): void {
    if (this.options.Starting === false) {
      return;
    }
    this.outputFormattedMessage(chalk.cyan, 'RUNNING TEST', test);
  }

  onTestPass(test: WDIOReporter.Test): void {
    if (this.options.Passed === false) {
      return;
    }
    this.outputFormattedMessage(chalk.green, 'PASSED TEST', test);
  }

  onTestFail(test: WDIOReporter.Test): void {
    if (this.options.Failed === false) {
      return;
    }
    this.outputFormattedMessage(chalk.red, 'FAILED TEST', test);
  }
  onTestSkip(test: WDIOReporter.Test): void {
    if (this.options.Skipped === false) {
      return;
    }
    this.outputFormattedMessage(chalk.cyan, 'SKIPPED TEST', test);
  }
}

export default TestNameReporter;