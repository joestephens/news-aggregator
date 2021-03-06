'use strict';

(function(exports) {

  function Headlines() {
    this.list = [];
    this.url = 'https://evening-basin-53132.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=brexit';
  };

  Headlines.prototype = {
    addHeadline: function(story) {
      this.list.push(story);
    },

    getJSON: function() {
      this._ajaxRequest(this.url, function(json) {
        json.response.results.map(function(object) {
          this.outputStory(object.webTitle, object.webUrl)
        });
      });
    },

    _ajaxRequest: function(uri, callback) {
      var request = new XMLHttpRequest();

      request.open('GET', uri, true);

      request.onreadystatechange = function(response) {
        if(request.readyState === 4 && request.status === 200) {
          var myJSON = JSON.parse(request.responseText);
          callback(myJSON);
        }
      }

      request.send();
    }
  };

  exports.Headlines = Headlines;

})(this);
