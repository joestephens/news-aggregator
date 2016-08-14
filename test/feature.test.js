penvar server = require('http-server').createServer();
var Browser = require('zombie');
var assert = require('chai').assert;

describe('Feature Test', function() {
  var browser;

  beforeEach(function(done) {
    server.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000'});
    browser.visit('/', done);
  });

  afterEach(function() {
    server.close(3000);
  });

  it('has a title', function() {
    assert.equal(browser.text('title'), 'The Daily Brexit');
  });
});
