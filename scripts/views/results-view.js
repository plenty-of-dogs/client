'use strict';

var app = app || {};

(function(module) {

  let resultsView = {};

  resultsView.init = () => {
    $('.container').hide();
    $('#results-view').fadeIn('slow');
    resultsView.favorites = module.homeView.voteCounter.sort((a, b) => b.vote - a.vote).slice(0, 3);
    localStorage.setItem('voteCounter', JSON.stringify(module.homeView.voteCounter));
    $('#results-view').text(`${resultsView.favorites[0].breed}, ${resultsView.favorites[1].breed}, and ${resultsView.favorites[2].breed} are your 3 top dog breeds!`);
  };

  module.resultsView = resultsView;
})(app);