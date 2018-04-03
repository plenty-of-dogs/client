'use strict';
var app = app || {};

(function(module) {

// the game

let selectorView = {};

selectorView.init = () => {
  $('.container').hide();
  $('#selector-view').fadeIn('slow');
}


// const render = function(breeds) {
//   let template = Handlebars.compile($('#selector-template').text());
//   breeds.findBreed();

//   return template(breeds);
// }

selectorView.generateRandom = () => {
  return Math.floor(Math.random() * Breeds.all.length)
}

selectorView.randomBreeds = [];
selectorView.randomPic = () => {
  while(selectorView.randomBreeds.length < 40) {
    let randomNum = selectorView.generateRandom();
    while(!selectorView.randomBreeds.includes(randomNum)) {
      selectorView.randomBreeds.push(randomNum);
    }
  }
}

selectorView.index = function(breeds) {
  $('#selector-view').show().siblings().hide();
  for (let i = 0; i < 2; i ++) {
    let temp = randomBreeds.shift();
    $('#images-wrapper').append(breeds[temp]);
  }
}
module.selectorView = selectorView;
})(app);
