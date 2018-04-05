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
    // reset();
    $('.container').hide();
    $('#user-view').fadeIn('slow');
    $('#log-in-form').on('submit', module.User.fetchUser);
    // $('login-form').on('submit', function(event) {
    //   event.preventDefault();
    //   let user = {
    //     user: event.target.username,
    //     password: event.target.passphrase,
  };
  // let token = event.target.passphrase.value;
  // });
  // };

  // userView.addUser = function () {
  //   $;
  // };


  module.userView = userView;
})(app);


















