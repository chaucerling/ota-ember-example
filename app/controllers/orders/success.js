import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(order) {
      console.log('delete');
      order.destroyRecord().then(function() {
        this.transitionTo('hotels.search');
        Ember.$('#cancel_order_modal').modal('hide');
      }.bind(this));
    }
  }
});
