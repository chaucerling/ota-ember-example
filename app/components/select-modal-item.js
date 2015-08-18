import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-item'],
  classNameBindings: ['isSelected:selected-item'],
  isSelected: false,

  text: null,
  value: null,

  click: function() {
    if(!this.get('isSelected')){
      this.set('isSelected', true);
      this.sendAction('action', this);
    }
    this._super();
  }
});
