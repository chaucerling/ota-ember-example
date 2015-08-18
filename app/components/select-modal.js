import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade', 'select-modal-module'],
  tabindex: -1,
  ariaRole: 'dialog',
  attributeBindings: ['ariaHidden:aria-hidden'],
  ariaHidden: true,

  elementId: null,
  title: null,
  bindText: null,
  bindValue: null,

  selectedItem: null,

  actions: {
    applySelectedItem: function(){
      var selectedItem = this.get('selectedItem');
      this.set('bindValue', selectedItem.get('value'));
      this.set('bindText', selectedItem.get('text'));
      this.sendAction('apply');
      this.$().modal('hide');
    },
    selectItem: function(item){
      if(!Ember.isEmpty(this.get('selectedItem'))){
        this.get('selectedItem').set('isSelected', false);
      }
      this.set('selectedItem', item);
    }
  }
});
