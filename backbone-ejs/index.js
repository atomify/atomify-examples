var $ = require('jquery')
  , _ = require('underscore')
  , Backbone = require('backbone')

Backbone.$ = $

var Person = require('person/PersonModel')
  , PeopleView = require('people/PeopleView')


var People = Backbone.Collection.extend({
  model: Person
});

var family = new People([
  new Person({name: 'Ben'}),
  new Person({name: 'Hannah'}),
  new Person({name: 'Sophi'}),
  new Person({name: 'Jack'}),
  new Person({name: 'Henry'})
]);

var peopleView = new PeopleView({collection: family});

$('#list').html(peopleView.render().el);
