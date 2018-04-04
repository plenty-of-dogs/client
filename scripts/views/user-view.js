// when we init user view, hide login and show matches
// hide container
// create button to hover over for form 
// form will have username and password input, plus the submit form
//on submit, the button goes to matches-view.js and will show matches
'use strict';

var app = app || {};

(function(module) {

  let userView = {};

  userView.init = () => {
    $('.container').hide();
    $('#user-view').fadeIn('slow');
  };

  module.userView = userView;
})(app);


















