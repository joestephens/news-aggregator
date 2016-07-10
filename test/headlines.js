'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var Headlines = require('../public/lib/headlines.js').Headlines;

describe('Headlines', function() {
  var headlines;

  beforeEach(function() {
    headlines = new Headlines();
  });

  it('has a new instance', function() {
    expect(headlines).to.be.instanceOf(Headlines);
  });

  it('has no items', function() {
    expect(headlines.list).to.be.empty;
  });

  it('has items', function() {
    var story1 = sinon.stub();
    story1.withArgs('Brexit :(', 'http://www.brexit.com').returns({ title: 'Brexit :(', url: 'http://www.brexit.com' });
    var story2 = sinon.stub();
    story2.withArgs('More Brexit :(', 'http://www.morebrexit.com').returns({ title: 'More Brexit :(', url: 'http://www.morebrexit.com' });
    headlines.addHeadline(story1);
    headlines.addHeadline(story2);
    expect(headlines.list).to.include(story1);
    expect(headlines.list).to.include(story2);
  });

  it('has an api url', function() {
    expect(headlines.api).to.equal(process.env.API_URL);
  });
});
