'use strict';

var app = app || {};

(function(module) {

  let resultsView = {};

  resultsView.init = () => {
    $('.container').hide();
    $('#results-view').fadeIn('slow');
    resultsView.favorites = module.homeView.voteCounter.sort((a, b) => b.vote - a.vote).slice(0, 3);
    if (module.User.all.vote_counter !== undefined) module.User.updateUser(module.User.all);
    resultsView.setImage(resultsView.favorites);
  };
  resultsView.setImage = (favorites) => {
    favorites.forEach((x, i) => {
      $.get(`https://dog.ceo/api/breed/${x.breed}/images/random`)
        .then(results => {
          resultsView.favorites[i].breedName = `${x.breed.charAt(0).toUpperCase()}${x.breed.split('').slice(1).join('')}`;
          switch (x.breedName) {
          case 'Germanshepherd':
            x.breedName = 'German Shepherd Dog';
            break;
          case 'Collie':
            x.breedName = 'Border Collie';
            break;
          case 'Bulldog':
            x.breedName = 'French Bulldog';
            break;
          case 'Dane':
            x.breedName = 'Great Dane';
            break;
          case 'Deerhound':
            x.breedName = 'Scottish Deerhound';
            break;
          case 'Elkhound':
            x.breedName = 'Norwegian Elkhound';
            break;
          case 'Pinscher':
            x.breedName = 'Miniature Pinscher';
            break;
          case 'Doberman':
            x.breedName = 'Doberman Pinscher';
            break;
          case 'Ridgeback':
            x.breedName = 'Rhodesian Ridgeback';
            break;
          case 'Sheepdog':
            x.breedName = 'Sheep Dog';
            break;
          case 'Springer':
            x.breedName = 'Spaniel';
            break;
          case 'Wolfhound':
            x.breedName = 'Irish Wolfhound';
            break;
          }
          $(`.result-dog-breed-${i}`).text(x.breedName);
          $(`.result-dog-${i}`).attr('src', results.message);
        });
    });
  };

  module.resultsView = resultsView;
})(app);