'use strict';

var app = app || {};

(function(module) {

  let homeView = {};

  homeView.init = () => {
    $('.container').hide();
    $('#home-view').fadeIn('slow');
    console.log('homeview?');
  };

  // $('#selector-view-button').on('click', );

  module.homeView = homeView;
})(app);
