'use strict';
var app = app || {};

const ENV = {};
ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiURL = 'https://plenty-of-dogs.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiURL = ENV.isProduction ? ENV.productionApiURL : ENV.developmentApiUrl;
console.log('environment url ', ENV.apiURL);

(function(module) {

  function User (userObject) {
    Object.keys(userObject).forEach(key => this[key] = userObject[key]);
  }

  User.all = {};

  User.fetchUser = (event, callback) => {
    event.preventDefault();
    $.get(`${ENV.apiUrl}/api/v1/users`)
      .then(results => {
        console.log(results);
        console.log($('#username').val());
        results.forEach(login => {
          if (login.username === $('#username').val() && login.password === $('#passphrase').val()) {
            User.all = new User(login);
            if (login.vote_counter !== ' ') {
              module.homeView.voteCounter = JSON.parse(User.all.vote_counter);
              $('.user').show();
            }
            console.log(login);
            page('/');
          }
        });
        if (callback) callback();
      })
      .catch(console.error);
  };

  //build createUser here
  User.createUser = (event, callback) => {
    event.preventDefault();
    $.post(`${ENV.apiUrl}/api/v1/users`)
      .then(() => {
        page('/');
        if (callback) callback();
      });
  };

  User.updateUser = (user, callback) => {
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