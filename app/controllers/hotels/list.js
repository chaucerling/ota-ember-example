import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  actions: {
    selectFilter: function (modalID) {
      // console.log('selectFilter');
      var self = this;
      var options = Ember.$.extend(true, {}, self.get('searchOption'));
      options.page = 0;
      self.store.unloadAll('hotel');
      self.set('model', []);
      self.store.query('hotel', options).then(function (hotels) {
        self.get('model').addObjects(hotels);
        console.log(Ember.$(modalID));
        Ember.$(modalID).modal('hide');
      });
    }
  },

  // 酒店列表加载分页
  loadHotel: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var self = this;
      // 初始化 iscroll
      Ember.$('#wrapper').pullScroll({}, function(scroll, page){
        var options = Ember.$.extend(true, {}, self.get('searchOption'));
        options.page = page;
        console.log("page:" + page);
        self.store.query('hotel', options).then(function (hotels) {
          // 从储存层获取所有 hotel ，并设置 iscroll 刷新的回调函数
          self.set('model', self.store.peekAll('hotel'));
          Ember.run.schedule('afterRender', self, self.get('refreshView'), scroll)
        });
      });
    })
  }.on('init'),
  refreshView: function(scroll){
    scroll.refreshView();
  }.on('afterRender')
});
