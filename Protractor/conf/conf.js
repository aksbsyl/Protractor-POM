// An example configuration file.
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
      capabilities: {
        
        'browserName': 'chrome',
      'chromeOptions': {
        
      'useAutomationExtension': false,
      'excludeSwitches': ['enable-automation']

      }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../testcases/pomtest.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new HtmlReporter({
    baseDirectory: 'Report/screenshots'
    }).getJasmine2Reporter());
    }
};
