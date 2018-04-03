'use strict';

var app = app || {};

(function(module) {

  let resultsView = {};

  resultsView.init = () => {
    $('.container').hide();
    $('#results-view').fadeIn('slow');
    resultsView.favorites = module.homeView.voteCounter.sort((a, b) => b.vote - a.vote).slice(0, 3);
    localStorage.setItem('voteCounter', JSON.stringify(module.homeView.voteCounter));
    // $('#results-view').text(`${resultsView.favorites[0].breed}, ${resultsView.favorites[1].breed}, and ${resultsView.favorites[2].breed} are your 3 top dog breeds!`);
    resultsView.setImage(resultsView.favorites);
  };
	
  resultsView.setImage = (favorites) => {
    favorites.forEach((x, i) => {
      $.get(`https://dog.ceo/api/breed/${x.breed}/images/random`)
        .then(results => {
          $(`.result-dog-breed-${i}`).text(`${x.breed.charAt(0).toUpperCase()}${x.breed.split('').slice(1).join('')}`);
          $(`.result-dog-${i}`).attr('src', results.message);
        });
    });
  };

  module.resultsView = resultsView;
})(app);