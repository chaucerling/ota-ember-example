import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['select-item'],
  classNameBindings: ['isSelected:selected-item'],
  isSelected: false,
  searchOption: null,
  filter: null,
  value: null,
  click: function() {
    // console.log("click");
    var self = this;
    var currentElement = Ember.$(self.get('element'));
    self.set('isSelected', true);
    self.set("searchOption." + self.get('filter'), self.get('value'));
    var selectContent = currentElement.parent('.select-content');
    selectContent.find('.selected-item').removeClass('selected-item');
    currentElement.addClass('selected-item');
  }
});
