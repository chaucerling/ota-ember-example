import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'wrapper',

  pullScroll: null,

  model: null,
  paging: null, // 加载分页时的回调函数，参数 page

  // 初始化 pullscroll
  initPullScroll: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var pullScroll = Ember.$('#wrapper').pullScroll({},
        Ember.run.bind(this, function (scroll, page) {
          this.sendAction('paging', page);
        }));
      this.set('pullScroll', pullScroll);
    })
  }.on('didInsertElement'),
  // 模型变化后刷新 pullscroll
  modelChange: Ember.observer('model.length', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      console.log(this.get('model.length'));
      this.get('pullScroll').refreshView();
    });
  })
});
