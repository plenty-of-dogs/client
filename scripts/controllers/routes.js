'use strict'; 

//endpoints

page('/', ctx => module.Breeds.fetchAll(module.selectorView.init));


page();