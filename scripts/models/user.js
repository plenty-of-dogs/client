'use strict';
var app = app || {};

const ENV = {};
ENV.apiUrl = 'https://plenty-of-dogs.herokuapp.com';

(function(module) {

  function User (userObject) {
    Object.keys(userObject).forEach(key => this[key] = userObject[key]);
  }

  User.all = {};

  User.fetchUser = (event, callback) => {
    event.preventDefault();
    $.get(`${ENV.apiUrl}/api/v1/users`)
      .then(results => {
        results.forEach(login => {
          if (login.username === $('#username').val() && login.password === $('#passphrase').val()) {
            User.all = new User(login);
            if (login.vote_counter !== ' ') {
              module.homeView.voteCounter = JSON.parse(User.all.vote_counter);
              $('.user').show();
            }
            $('#username').val('');
            $('#passphrase').val('');
            page('/');
          }
        });
        module.resultsView.favorites = module.homeView.voteCounter.slice(0, 3);
        module.resultsView.setImage(module.resultsView.favorites);
        if (callback) callback();
      })
      .catch(console.error);
  };

  //build createUser here
  User.createUser = (event, callback) => {
    event.preventDefault();
    $.post(`${ENV.apiUrl}/api/v1/users`, {username: $('#create-username').val(), password: $('#create-passphrase').val()})
      .then(() => {
        if (callback) callback();
        $('#create-username').val('');
        $('#create-passphrase').val('');
        page('/user');
      });
  };

  User.updateUser = (user, callback) => {
    User.all.vote_counter = JSON.stringify(module.homeView.voteCounter);
    $.ajax({
      url: `${ENV.apiUrl}/api/v1/users/${user.user_id}`,
      method: 'PUT',
      data: user
    })
      .then(() => {
        if(callback) callback();
      });
  };

  module.User = User;
})(app);