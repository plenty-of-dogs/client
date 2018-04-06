'use strict';

var app = app || {};

(function(module) {

  let userView = {};

  userView.init = () => {
    $('.container').hide();
    $('#user-view').fadeIn('slow');
    $('#log-in-form').on('submit', module.User.fetchUser);
  };

  module.userView = userView;
})(app);


















