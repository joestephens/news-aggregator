'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var TemplateEngine = require('../public/lib/templateEngine.js').TemplateEngine;

describe('TemplateEngine', function() {
  var templateEngine;
  var story1 = sinon.stub();
  var story2 = sinon.stub();

  beforeEach(function() {
    templateEngine = new TemplateEngine();
    story1.title = 'Brexit :(';
    story1.url = 'http://www.brexit.com';
    story1.body = '<h2>Brexit :(</h2><p>Country is in shit because of Brexit.</p>';
    story2.title = 'More Brexit :(';
    story2.url = 'http://www.morebrexit.com';
  });

  it('has a new instance', function() {
    expect(templateEngine).to.be.instanceOf(TemplateEngine);
  });

  it('formats a list of story objects', function() {
    var output = templateEngine.formatHeadlines([story1, story2]);
    expect(output).to.include('<h2>Brexit :(</h2>');
    expect(output).to.include('<h2>More Brexit :(</h2>');
  });
});
