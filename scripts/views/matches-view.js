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
    matches.image = matches.media.photos.photo[3].$t;
    return template(matches);
  };

  // matchesView.carousel = () => {
  //   let i = $('.carousel').attr('src').match(/\/(\d)\//)[1];
  //   if (i === 5) {
  //     i = 0;
  //     $('.carousel').attr('src', $('.carousel').attr('src').replace(/\/(\d)\//, `/${i}/`));
  //   } else {
  //     i ++;
  //     $('.carousel').attr('src', $('.carousel').attr('src').replace(/\/(\d)\//, `/${i}/`));
  //   }
  // };

  matchesView.init = () => {
    $('.container').hide();
    $('#matches-view').fadeIn('slow');
    module.Matches.all.forEach(x => $('#matches-view').append(matchesView.render(x)))
    // setInterval(matchesView.carousel, 2000);
  };

  module.matchesView = matchesView;
})(app);
