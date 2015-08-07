import Ember from 'ember';

export default Ember.Component.extend({
  searchOption: null, // passed-in
  hotels: null, // passed-in
  store: null,
  loadHotel: function () {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var self = this;
      Ember.$('#wrapper').pullScroll({}, function(scroll, page){
        var options = Ember.$.extend(true, {}, self.get('searchOption'));
        options.page = page;
        console.log("page:" + page);
        self.get('store').query('hotel', options).then(function (hotels) {
          self.set('hotels', self.store.peekAll('hotel'));
          Ember.run.schedule('afterRender', self, self.get('refreshView'), scroll)
        });
      });
    })
  }.on('didInsertElement'),
  refreshView: function(scroll){
    scroll.refreshView();
  }.on('afterRender')
});
