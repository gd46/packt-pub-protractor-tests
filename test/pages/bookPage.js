var account = require('../../config/credentials');

var BookPage = (function(){
  
  function BookPage(){
    this.loginButton = element(by.xpath("//*[@class='login-popup']"));
    this.loginForm = element(by.id("account-bar-form-login"));
    this.emailField = element(by.id("email"));
    this.passwordField = element(by.id("password"));
    this.submitButton = element(by.xpath("//*[@class='login-popup']"));
  }
  
  BookPage.prototype.gotoLogin = function(){
    browser.get(browser.baseUrl);
    browser.sleep(5000);
  }
  
  BookPage.prototype.gotoLoginForm = function(cb) {
    this.loginButton.click();
    browser.sleep(5000);
    this.emailField.isPresent().then(function(isPresent){
      return cb(isPresent);
    });
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