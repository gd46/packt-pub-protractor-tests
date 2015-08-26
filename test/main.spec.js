var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BookPage = require('./pages/bookPage.js');

describe("Download the book of the day", function(){
  
  var page = new BookPage();
  
  it("should go to the packtpub site", function(){
    page.gotoLogin();
    assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl, "Did not successfully navigate to packpub website");
  });
  
  it("should login the user", function(){
    page.gotoLoginForm(function(isPresent){
      console.log(isPresent);
      if(isPresent === true){
        page.signIn();
        assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl + 'index');
      } else {
        assert.isTrue(isPresent, "The login form should have poped up");
      }
    })
  })
  
});