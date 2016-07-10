'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var Headlines = require('../public/lib/headlines.js').Headlines;

describe('Headlines', function() {
  var headlines;
  var story1 = sinon.stub();
  var story2 = sinon.stub();

  beforeEach(function() {
    headlines = new Headlines();
    headlines.addHeadline(story1);
    headlines.addHeadline(story2);
  });

  it('has a new instance', function() {
    expect(headlines).to.be.instanceOf(Headlines);
  });

  it('has no items on initialisation', function() {
    var headlines_empty = new Headlines();
    expect(headlines_empty.list).to.be.empty;
  });

  it('has items', function() {
    expect(headlines.list).to.include(story1);
    expect(headlines.list).to.include(story2);
  });

  // Doesn't work :/
  //
  // it('adds items from a json request', function() {
  //   headlines.addFromJSON('example.json');
  //   expect(headlines.list[0].title).to.eq('Simone Lia on Brexit');
  //   expect(headlines.list[1].url).to.eq('https://content.guardianapis.com/commentisfree/2016/jul/07/stories-buried-brexit-child-poverty-un-austerity');
  // });

  it('has an api url', function() {
    expect(headlines.api).to.equal(process.env.API_URL);
  });
});
