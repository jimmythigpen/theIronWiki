import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('home', {path: '/'}, function() {});
  this.route('login');
  this.route('register');
  this.route('account');
  this.route('wiki', {path: '/wiki/:wiki_id'});
  this.route('new');
});
