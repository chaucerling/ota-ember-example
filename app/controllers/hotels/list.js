import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  sortText: null,//"排序",
  brandText: null,//"品牌",

  isloading: false,

  actions: {
    // 根据选项值重新加载酒店列表
    loadOption: function () {
      var options = Ember.copy(this.get('searchOption'), true);
      options.page = 0;
      this.set('model', []);
      this.store.unloadAll('hotel');
      this.store.query('hotel', options).then(function (hotels) {
        this.set('model', this.store.peekAll('hotel').toArray());
        console.log('update');
      }.bind(this));
    },
    loadPaging: function (page) {
      var options = Ember.copy(this.get('searchOption'), true);
      options.page = page;
      console.log("page:" + page);
      this.store.query('hotel', options).then(function (hotels) {
        // 从储存层获取所有 hotel
        this.set('model', this.store.peekAll('hotel').toArray());
      }.bind(this));
    }
  },
});
