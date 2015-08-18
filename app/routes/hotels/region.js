import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params, transition) {
    // return this.store.find('region', params.city_code);
    return Ember.RSVP.hash({
      region: this.store.find('region', params.city_code),
      city: this.store.find('city', params.city_code)
    });
  },
  beforeModel: function(transition){
    // console.log(this.paramsFor('hotels.region'));
    if (Ember.isEmpty(transition.queryParams.city_code)){
      this.transitionTo('hotels.search');
    }
  },
  afterModel: function(model, transition){
    var city_code = model.city.get('id');
    var city_name = model.city.get('name');
    this.controllerFor('hotels/base').setProperties({
      'searchOption.city_code': city_code,
      'searchOption.city_name': city_name
    });
  },
});
