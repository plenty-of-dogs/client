'use strict';
app = app || {};

(function (module) {
  function Matches (rawDataObj) {
    this.breed = (rawDataObj.breeds.breed.$t === undefined) ? `${rawDataObj.breeds.breed[0].$t} and ${rawDataObj.breeds.breed[1].$t}` : rawDataObj.breeds.breed.$t;
    this.age = rawDataObj.age.$t;
    this.media = rawDataObj.media;
    this.name = rawDataObj.name.$t;
    this.sex = (rawDataObj.sex.$t === 'M') ? 'Male' : 'Female';
    this.size = rawDataObj.size.$t;
    this.shelterId = rawDataObj.shelterId.$t;
    this.description = rawDataObj.description.$t;
    this.address = rawDataObj.contact.address1.$t;
    this.city = rawDataObj.contact.city.$t;
    this.state = rawDataObj.contact.state.$t;
    this.phone = rawDataObj.contact.phone.$t;
    this.email = rawDataObj.contact.email.$t;
    this.zip = rawDataObj.contact.zip.$t;
    this.shelterName = '';
    this.id = rawDataObj.id.$t;
  }

  Matches.Shelters = function(rawDataObj) {
    this.address = rawDataObj.address1.$t;
    this.city = rawDataObj.city.$t;
    this.state = rawDataObj.state.$t;
    this.name = rawDataObj.name.$t;
    this.phone = rawDataObj.phone.$t;
    this.email = rawDataObj.email.$t;
    this.shelterId = rawDataObj.id.$t;
    this.zip = rawDataObj.zip.$t;
  };

  Matches.all = [];
  Matches.allShelters = [];

  Matches.loadAll = doggos => {
    doggos.sort((a, b) => {
      return (a.shelterId > b.shelterId) ? -1 : (b.shelterId > a.shelterId) ? 1 : 0;
    });
    doggos.forEach(ele => Matches.all.push(new Matches(ele)));
  };

  Matches.fetchAll = (limit) => {
    if (limit > 0) {
      $.getJSON(`http://api.petfinder.com/pet.find?format=json&key=3d091dff8b5bcf18c825930adc9b0f9e&location=Seattle,WA&breed=${module.resultsView.favorites[3 - limit].breedName}&callback=?`)
        .then(results => {
          if (results.petfinder.pets.pet === undefined) Matches.fetchAll(limit - 1);
          else {
            Matches.loadAll(results.petfinder.pets.pet);
            Matches.fetchAll(limit - 1);
          }
        });
    } else {
      module.matchesView.init();
    }
  };

  Matches.loadShelters = (shelters) => {
    Matches.allShelters = shelters.map(ele => new Matches.Shelters(ele));
  };

  Matches.fetchShelters = () => {
    $.getJSON(`http://api.petfinder.com/shelter.find?format=json&key=3d091dff8b5bcf18c825930adc9b0f9e&location=Seattle,WA&callback=?`)
      .then(results => {
        Matches.loadShelters(results.petfinder.shelters.shelter);
      });
  };

  module.Matches = Matches;
})(app);