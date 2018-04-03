'use strict';

var app = app || {};

(function(module) {

  let matchesView = {};

  matchesView.init = () => {
    $('.container').hide();
    $('#matches-view').fadeIn('slow');
  };

  module.matchesView = matchesView;
})(app);
