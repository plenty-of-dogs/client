'use strict';

var app = app || {};

(function(module) {

  let homeView = {};
  homeView.voteCounter = [];

  homeView.init = () => {
    $('.container').hide();
    $('#home-view').fadeIn('slow');
    if (homeView.voteCounter.length === 0) {
      $.get('https://dog.ceo/api/breeds/list')
        .then(results => {
          results.message.forEach(x => {
            homeView.voteCounter.push(
              {
                breed: x,
                vote: 0
              }
            );
          });
        });
    }
  };

  module.homeView = homeView;
})(app);
