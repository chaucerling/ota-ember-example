import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    console.log('activate show');
    this.modelFor('cities/show').reload();
  },
  // beforeModel: function(){
  //   console.log('beforeModel show');
  //   this.modelFor('cities/show').reload();
  // },
  afterModel: function(){
    console.log('afterModel show');
    this.modelFor('cities/show').reload();
  },
});
