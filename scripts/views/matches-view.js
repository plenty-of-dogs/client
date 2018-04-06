'use strict';

var app = app || {};

(function(module) {

  let matchesView = {};

  matchesView.render = matches => {
    let template = Handlebars.compile($('#matches-view-template').text());
    module.Matches.allShelters.forEach(shelter => {
      if (matches.shelterId === shelter.shelterId) {
        matches.shelterName = shelter.name;
      }
    });
    if (matches.shelterName === '' || matches.shelterName === undefined) {
      matches.shelterName = 'Sorry, we could not find the name of this shelter.';
    }
    (matches.media.photos !== undefined) ? matches.image = matches.media.photos.photo[3].$t : matches.noImage = 'Sorry, there are no pictures of this dog';
    return template(matches);
  };

  matchesView.init = () => {
    $('.container').hide();
    $('#matches-view').text('');
    $('#matches-view').fadeIn('slow');
    module.Matches.all.forEach(x => $('#matches-view').append(matchesView.render(x)));
  };

  module.matchesView = matchesView;
})(app);
