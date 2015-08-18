import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('hotel',
      this.controllerFor('hotels/base').get('searchOption'));
  },
  beforeModel: function() {
    this.controllerFor('hotels/base').setProperties({
      'searchOption.filter': '',
      'searchOption.brand': ''
    });
  }
});
