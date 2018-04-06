'use strict';

var app = app || {};

(function(module) {

// the game
  let selectorView = {};
  selectorView.gameCounter = 5;
  selectorView.clickCounter = 0;

  selectorView.init = () => {
    $('.container').hide();
    $('#selector-view').fadeIn('slow');
    selectorView.randomPic();
    $('.clicks').empty();
    $('.clicks').append(`Round ${selectorView.clickCounter + 1}/${selectorView.gameCounter}`);
  };
  $('#images-wrapper').on('click', event => {
    selectorView.clickCounter += 1;
    $('.clicks').empty();
    $('.clicks').append(`Round ${selectorView.clickCounter + 1}/${selectorView.gameCounter}`);
    if (event.target.id === 'images-wrapper') return alert('Invalid selection');
    let matchedBreed = event.target.src.match(/img\/(\w+)/)[1];
    module.homeView.voteCounter.forEach(x => {
      if (x.breed === matchedBreed) x.vote += 1;
    });
    if (selectorView.clickCounter === selectorView.gameCounter) {
      selectorView.clickCounter = 0;
      module.resultsView.init();
    }
    selectorView.randomPic();
  });

  selectorView.generateRandom = () => {
    return Math.floor(Math.random() * module.Breed.all.length);
  };

  selectorView.randomBreeds = [];
  selectorView.randomPic = () => {
    while(selectorView.randomBreeds.length < 3) {
      let randomNum = selectorView.generateRandom();
      while(!selectorView.randomBreeds.includes(randomNum)) {
        selectorView.randomBreeds.push(randomNum);
      }
    }
    let tempLeft = selectorView.randomBreeds.shift();
    let tempRight = selectorView.randomBreeds.shift();
    $('.dog-left').attr('src', module.Breed.all[tempLeft].message);
    $('.dog-right').attr('src', module.Breed.all[tempRight].message);
  };

  module.selectorView = selectorView;
})(app);
