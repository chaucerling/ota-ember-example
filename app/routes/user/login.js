import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    if (!Ember.isEmpty(this.get('session.secure.user'))){
      console.log('has login')
      this.transitionTo('hotels.search');
    }
  }
});
