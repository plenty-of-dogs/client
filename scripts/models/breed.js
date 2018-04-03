'use strict';
var app = app || {};

const ENV = {};
ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiURL = 'https://plenty-of-dogs.github.io/client/';
ENV.developmentApiUrl = 'localhost:3000'; 
ENV.apiURL = ENV.isProduction ? ENV.productionApiURL : ENV.developmentApiUrl;


(function(module) {

Breeds.all = [];
Breeds.allRandom = [];


//setting up the random images
function Breeds (rawDataObj) {
  this.rawDataObj = rawDataObj;
  this.votes = 0;
  this.previous = false;
  this.findBreed();
  Breeds.all.push(this);
}

Breeds.prototype.findBreed = function() {
  this.breed = this.message.match(/img[\\\/](\w+)/)[1];
};

Breeds.fetchAll = callback => {
  for (let i = 0; i < 40; i ++) {
    Breeds.fetchRandom();
  }
  Breeds.loadAll(Breeds.allRandom);
}

// This is getting a random dog picture
Breeds.fetchRandom = callback => {
  $.get('https://dog.ceo/api/breeds/image/random')
  .then(results => Breeds.allRandom.push(results));
}
module.Breeds = Breeds;
})(app);