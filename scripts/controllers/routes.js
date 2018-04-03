'use strict';

if(window.location.pathname !== '/') {
  page.base('/client');
}

//endpoints

page('/', app.homeView.init);
page('/breed-selector', ctx => app.Breed.fetchAll(10));

page();