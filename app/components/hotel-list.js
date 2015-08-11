import Ember from 'ember';

export default Ember.Component.extend({
  searchOption: null, // passed-in
  hotels: null, // passed-in
  store: null, // passed-in
  loadHotel: function () {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var self = this;
      // 初始化 iscroll
      Ember.$('#wrapper').pullScroll({}, function(scroll, page){
        var options = Ember.$.extend(true, {}, self.get('searchOption'));
        options.page = page;
        console.log("page:" + page);
        self.get('store').query('hotel', options).then(function (hotels) {
          // 从储存层获取所有 hotel ，并设置 iscroll 刷新的回调函数
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
