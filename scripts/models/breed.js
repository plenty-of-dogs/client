'use strict';
var app = app || {};

(function(module) {

  //setting up the random images
  function Breed () {
  }

  Breed.all = [];

  // This retrieves all dog-breed pics.
  Breed.fetchAll = limit => {
    if (localStorage.randomDogImages) {
      Breed.all = JSON.parse(localStorage.getItem('randomDogImages'));
      module.selectorView.init();
    } else if (limit > 0) {
      $.get('https://dog.ceo/api/breeds/image/random')
        .then(results => {
          Breed.all.push(results);
          Breed.fetchAll(limit - 1);
        });
    } else {
      localStorage.setItem('randomDogImages', JSON.stringify(Breed.all));
      module.selectorView.init();
    }
  };



  module.Breed = Breed;
})(app);