'use strict';
app = app || {};

(function (module) {
  function Matches (rawDataObj) {
    this.breed = rawDataObj.breed;
  }

  module.Matches = Matches;
})(app);