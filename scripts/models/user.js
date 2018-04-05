'use strict';
var app = app || {};

(function(module) {

  function User (userObject) {
    Object.keys(userObject).forEach(key => this[key] = userObject[key]);
  }

  User.all = [];

  User.fetchUser = (event, callback) => {
    event.preventDefault();
    $.get(`http://localhost:3000/api/v1/users`)
      .then(results => {
        console.log(results);
        if (callback) callback();
      })
      .catch(console.error);
  };

//build createUser here
  // User.fetchUser = (event, callback) => {
  //   event.preventDefault();
  //   $.get(`http://localhost:3000/api/v1/users`)
  //     .then(results => {
  //       console.log(results);
  //       if (callback) callback();
  //     })
  //     .catch(console.error);
  // };

  module.User = User;
})(app);