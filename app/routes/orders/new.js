import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      hotel: this.store.find('hotel-detail', params.hotel_code),
      room: this.store.find('room-type', params.hotel_code),
      order: this.store.createRecord('order')
    });
  },
  beforeModel: function(transition){
    if (Ember.isEmpty(this.get('session.secure.user'))){
      // 未登录
      this.transitionTo('user.login');
    } else if (Ember.isEmpty(transition.queryParams.hotel_code) ||
      Ember.isEmpty(transition.queryParams.room_type)){
      // queryParams 不全
      this.transitionTo('hotels.search');
    }
  },
  afterModel: function(model, transition){
    var room = model.room.get('room_types').find(function(room){
      return room.room_type === transition.queryParams.room_type;
    });
    if(Ember.isEmpty(room)){
      // queryParams 的 room_type 不存在
      this.transitionTo('hotels.show', model.hotel.id);
    } else {
      // 初始化订单信息
      this.controllerFor('orders/new').set('room', room);
      model.order.setProperties({
        hotel: model.hotel,
        room: room,
        hotel_code: model.hotel.id,
        room_type: room.room_type,
        sale_code: room.sale_code,
        amount: 1,
        contact_name: this.get('session.secure.user.name'),
        contact_phone: this.get('session.secure.user.phone'),
      });
    }
  },
});
