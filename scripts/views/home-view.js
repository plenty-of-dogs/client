'use strict';

var app = app || {};

(function(module) {

  let homeView = {};
  homeView.voteCounter = [];

  homeView.init = () => {
    $('.container').hide();
    $('#home-view').fadeIn('slow');
    if (localStorage.voteCounter) {
      homeView.voteCounter = [];
      homeView.voteCounter = JSON.parse(localStorage.getItem('voteCounter'));
      localStorage.removeItem('voteCounter');
    } else {
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
