import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  actions: {
    selectFilter: function (modalID) {
      console.log('selectFilter');
      var self = this;
      self.page = 1;
      var _temp = self.get('searchOption');
      _temp.page = self.page;
      self.store.unloadAll('hotel');
      self.set('model', []);
      self.store.find('hotel', _temp).then(function (hotels) {
        self.get('model').addObjects(hotels);
        self.page += 1;
        console.log(Ember.$(modalID));
        Ember.$(modalID).modal('hide');
      });
    }
  },
  // hotels : function () {
  //   return this.get('model');
  // }.property('model.[]')
});
