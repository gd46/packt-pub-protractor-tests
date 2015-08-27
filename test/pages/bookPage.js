var account = require('../../config/credentials');

var BookPage = (function(){
  
  function BookPage(){
    this.loginButton = element(by.xpath("//*[@class='login-popup']"));
    this.emailField = element.all(by.id("email")).get(1);
    this.passwordField = element.all(by.id("password")).get(1);
    this.submitButton = element.all(by.id("login-form-submit")).get(1);
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
  
  return BookPage;
  
})();

module.exports = BookPage;