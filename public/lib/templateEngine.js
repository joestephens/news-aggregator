'use strict';

(function(exports) {

  function TemplateEngine() {

  };

  TemplateEngine.prototype = {
    formatHeadlines: function(list) {
      var formattedHTML = [];

      for(var i = 0; i < list.length; i++) {
        formattedHTML.push('<h2>' + list[i].title + '</h2>');
      };

      return formattedHTML.join('\n');
    }
  };

  exports.TemplateEngine = TemplateEngine;

})(this);
