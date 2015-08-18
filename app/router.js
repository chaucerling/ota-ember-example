import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', function(){
    this.route('login');
  });
  this.resource('hotels', function() {
    this.route('search');
    this.route('city');
    this.route('region');
    this.route('list');
    this.route('show', {path: ':hotel_id'});
    this.route('detail', {path: ':hotel_id/detail'});
    this.route('map', {path: ':hotel_id/map'});
  });
  this.resource('orders', function() {
    this.route('new');
    this.route('success', {path: ':order_id'});
  })
  // this.resource('cities', function() {
  //   this.route('show', { path: ':city_id' });
  // });
});

export default Router;
