'use strict';
app = app || {};

(function (module) {
  function Matches (rawDataObj) {
    this.breed = rawDataObj.breed;
  }

  Matches.fetchAll = () => {
    module.resultsView.favorites.forEach(match => {
      $.getJSON(`http://api.petfinder.com/pet.find?format=json&key=e71e981fb1330c9361d35b9f8a2bc4b3&location=98101&breed=${match.breedName}$callback=?`)
        .then(results => {results.petfinder.pets}
          // console.log(results);

        });
    });
  };

  Matches.fetchShelters = () => {
    $.getJSON(`http://api.petfinder.com/shelter.find?format=json&key=e71e981fb1330c9361d35b9f8a2bc4b3&location=98101$callback=?`)
        .then(results => {results.petfinder.shelters}
          // console.log(results);
    });
  };
  module.Matches = Matches;
})(app);