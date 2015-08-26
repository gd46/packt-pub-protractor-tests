exports.config = {
  seleniumAddress: 'http:127.0.0.1:4444/wd/hub',
  suites: {
    test: '../test/main.spec.js'
  },
  chromeOnly: true,
  chromDriver: './node_modules/protractor/selenium/chromedriver',
  baseUrl: 'https://packtpub.com',
  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
  }
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec',
    timeout: 30000
  },
  allScriptsTimeout: 30000
}