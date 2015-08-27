var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BookPage = require('./pages/bookPage.js');

describe("Download the book of the day", function(){
  
  var page = new BookPage();
  
  it("should go to the packtpub site", function(done){
    page.gotoLogin();
    assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl, "Did not successfully navigate to packpub website");
    done();
  });
  
  it("should login the user", function(done){
    page.gotoLoginForm(function(isPresent){
      if(isPresent == true){
        page.signIn();
        assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl + 'index');
        done();
      } else {
        assert.isTrue(isPresent, "The login form should have poped up");
        done();
      }
    });
  });
  
  it("should redirect user to the book of the day page", function(done){
    page.gotoFreeLearningPage();
    assert.eventually.equal(browser.getCurrentUrl(), browser.baseUrl + 'packt/offers/free-learning');
    done();
  });
  
  it("should allow user to claim the book of the day", function(done){
    page.claimBookOfDay(function(text){
      page.getFirstBookInList(function(title){
        console.log(title);
      })
    });
    done();
  });
});