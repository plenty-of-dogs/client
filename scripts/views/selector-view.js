'use strict';

var app = app || {};

(function(module) {

// the game
  let selectorView = {};

  selectorView.init = () => {
    $('.container').hide();
    $('#selector-view').fadeIn('slow');
    selectorView.randomPic();
  };

  $('#images-wrapper').on('click', event => {
    if (event.target.id === 'images-wrapper') return alert('Invalid selection');

  });

  selectorView.generateRandom = () => {
    return Math.floor(Math.random() * module.Breed.all.length);
  };

  selectorView.randomBreeds = [];
  selectorView.randomPic = () => {
    while(selectorView.randomBreeds.length < 5) {
      let randomNum = selectorView.generateRandom();
      while(!selectorView.randomBreeds.includes(randomNum)) {
        selectorView.randomBreeds.push(randomNum);
      }
    }
    console.log(selectorView.randomBreeds);
    let tempLeft = selectorView.randomBreeds.shift();
    let tempRight = selectorView.randomBreeds.shift();
    $('.dog-left').attr('src', module.Breed.all[tempLeft].message);
    $('.dog-right').attr('src', module.Breed.all[tempRight].message);
  };

  module.selectorView = selectorView;
})(app);
