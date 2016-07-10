'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var Story = require('../public/lib/story.js').Story;

describe('Story', function() {
  var story;

  beforeEach(function() {
    story = new Story('Brexit :(', 'http://www.brexit.com');
  });

  it('has a new instance', function() {
    expect(story).to.be.instanceOf(Story);
  });
});
