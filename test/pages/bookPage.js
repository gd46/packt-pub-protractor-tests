var account = require('../../config/credentials');

var BookPage = (function(){
  
  function BookPage(){
    this.loginButton = element(by.xpath("//*[@class='login-popup']"));
    this.emailField = element.all(by.id("email")).get(1);
    this.passwordField = element.all(by.id("password")).get(1);
    this.submitButton = element.all(by.id("login-form-submit")).get(1);
    this.freeLearningLink = element(by.xpath("//*[@id='main-carousel']/div/div/div[1]/div/div[2]/div/div[4]/div/span"));
    this.bookOfTheDayPage = element(by.xpath("//*[@id='20585']/div/div[1]/div[2]"));
    this.bookOfTheDay = element(by.xpath("//*[@type=submit"));
    this.bookOfTheDayTitle = element(by.css(".dotd-title"));
    this.listEbooks = element.all(by.css(".product-line unseen"));
  }
  
  BookPage.prototype.gotoLogin = function(){
    browser.get(browser.baseUrl);
    browser.sleep(5000);
  }
  
  BookPage.prototype.gotoLoginForm = function(cb) {
    var self = this;
    this.loginButton.click().then(function(){
      browser.sleep(2000);
      self.emailField.isPresent().then(function(isPresent){
        return cb(isPresent);
      });
    })
    
  }
  
  BookPage.prototype.signIn = function() {
    this.emailField.sendKeys(account.credentials.username);
    browser.sleep(3000);
    this.passwordField.sendKeys(account.credentials.password);
    browser.sleep(3000);
    this.submitButton.click();
    browser.sleep(5000);
  }
  
  BookPage.prototype.gotoFreeLearningPage = function() {
    this.freeLearningLink.click();
    browser.sleep(2000);
    this.bookOfTheDayPage.click();
    browser.sleep(5000);
  }
  
  BookPage.prototype.claimBookOfDay = function(cb) {
    browser.actions().mouseMove(this.bookOfTheDay).perform();
    browser.sleep(2000);
    this.bookOfTheDayTitle.getText().then(function(text){
      this.bookOfTheDay.click();
      browser.sleep(5000);
      return cb(text);
    });
  }
  
  BookPage.prototype.getFirstBookInList = function(cb) {
    var test = this.listEbooks.first();
    return cb(test);
  }
  
  return BookPage;
  
})();

module.exports = BookPage;