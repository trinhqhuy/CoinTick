class Logger {
  constructor(nameSpace) {
    this.nameSpace = nameSpace;
  }
  createLogger(message) {
    console.log(`[${this.nameSpace}] ${message}`);
  }
}
module.exports = Logger;
//How to use
/**const test = new Logger(test);
    test.createLogger("Hello"); */
