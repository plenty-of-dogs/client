'use strict';
var app = app || {};

(function(module) {

  //setting up the random images
  function Breed (rawDataObj) {
    this.url = rawDataObj.message;
    this.previous = false;
  }

  Breed.all = [];

  Breed.prototype.findBreedName = function() {
    this.breedName = this.message.match(/img[\\\/](\w+)/)[1];
  };

  // Breed.loadAll = dogData => {
  //   Breed.all = dogData.map(x => new Breed(x));
  //   return Breed.all;
  // };

  // This retreives all dog-breed pics.
  Breed.fetchAll = limit => {
    console.log("fetchall?");
    if (limit > 0) {
      $.get('https://dog.ceo/api/breeds/image/random')
        .then(results => {
          Breed.all.push(results);
          Breed.fetchAll(limit - 1);
        });
    } else {
      module.selectorView.init();
    }
  };



  module.Breed = Breed;
})(app);