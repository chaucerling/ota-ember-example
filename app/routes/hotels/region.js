import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    // return this.store.find('region', params.city_code);
    return Ember.RSVP.hash({
      region: this.store.find('region', params.city_code),
      city: this.store.find('city', params.city_code)
    });
  },
  beforeModel: function(){
    var city_code = this.paramsFor('hotels.region').city_code;
    if (city_code === ''){
      this.transitionTo('hotels.search');
    }
  },
  afterModel: function(){
    var city = this.modelFor('hotels.region').city;
    var city_code = city.get('id');
    var city_name = city.get('name');
    this.controllerFor('hotels/base').set('searchOption.city_code', city_code);
    this.controllerFor('hotels/base').set('searchOption.city_name', city_name);
  },
});
