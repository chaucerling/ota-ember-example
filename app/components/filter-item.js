import selectItem from './select-item';

export default selectItem.extend({
  filter: null,
  value: null,
  searchOption: null,
  click: function() {
    this.set("searchOption." + this.get('filter'), this.get('value'));
    this._super();
  }
});
