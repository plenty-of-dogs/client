'use strict';
var app = app || {};

const ENV = {};
ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiURL = 'https://plenty-of-dogs.github.io/client/';
ENV.developmentApiUrl = 'localhost:3000'; 
ENV.apiURL = ENV.isProduction ? ENV.productionApiURL : ENV.developmentApiUrl;


(function(module) {

  //setting up the random images
  function Breed () {
  }

  Breed.all = [];

  // This retreives all dog-breed pics.
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