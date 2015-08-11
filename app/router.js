import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.resource('hotels', function() {
    this.route('search');
    this.route('city');
    // this.route('region', { path: ':city_id'});
    this.route('region');
    this.route('list');
    this.route('show', {path: ':hotel_id'});
    this.route('detail', {path: ':hotel_id/detail'});
    this.route('map', {path: ':hotel_id/map'});
  });
  // this.resource('cities', function() {
  //   this.route('show', { path: ':city_id' });
  // });
});

export default Router;
