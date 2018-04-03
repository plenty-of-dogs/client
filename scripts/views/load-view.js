'use strict';
app = app || {};

(function(module){
  let loadView = {};

  loadView.init = () => {
    $('.container').hide();
    $('#load-view').fadeIn('slow');
  };

  module.loadView = loadView;
})(app);