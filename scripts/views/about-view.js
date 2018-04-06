'use strict';
app = app || {};

(function(module){
  let aboutView = {};

  aboutView.init = () => {
    $('.container').hide();
    $('#about-view').fadeIn('slow');
  };

  module.aboutView = aboutView;
})(app);