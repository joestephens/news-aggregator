'use strict';

(function(exports) {

  function Headlines() {
    this.api = process.env.API_URL;
    this.list = [];
  };

  Headlines.prototype = {
    addHeadline: function(story) {
      this.list.push(story);
    }
  };

  exports.Headlines = Headlines;

})(this);
