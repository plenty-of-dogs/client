'use strict';

if(window.location.pathname !== '/') {
  page.base('/client');
}

//endpoints

page('/', app.homeView.init);
page('/breed-selector', ctx => {
  app.loadView.init();
  app.Breed.fetchAll(75);
});
page('/results', app.resultsView.init);
page('/user', app.userView.init);

// page('/matches', ctx => )

page();
