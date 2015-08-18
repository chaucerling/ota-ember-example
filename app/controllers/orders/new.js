import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['hotel_code', 'room_type'],
  room: null,

  roomAmounts: [1,2,3],
  startTimes: Ember.computed(function() {
    function range(start, end) {
      return Array.apply(null, Array(end - start + 1)).map(function (_, i) {
        return i + start;
      });
    }
    var hour = new Date().getHours();
    if (hour >= 16){
      return [16,17,18];
    } else if (hour < 8){
      return range(8, 16);
    } else {
      return range(hour + 1, 16);
    }
  }),

  hasHotelCode: Ember.computed.notEmpty('model.order.hotel_code'),
  hasRoomType: Ember.computed.notEmpty('model.order.room_type'),
  hasContactName: Ember.computed.notEmpty('model.order.contact_name'),
  hasContactPhone: Ember.computed.notEmpty('model.order.contact_phone'),
  hasAmount: Ember.computed.notEmpty('model.order.amount'),
  hasStartTime: Ember.computed.notEmpty('model.order.start_time'),
  isValid: Ember.computed.and(
    'hasHotelCode', 'hasRoomType', 'hasContactName', 'hasContactPhone',
    'hasAmount', 'hasStartTime'
  ),

  actions: {
    submit: function(){
      if (this.get('isValid')){
        this.get('model.order').save().then(function (order) {
          this.transitionToRoute('orders.success', order);
        }.bind(this));
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
        console.log('errorMessage');
      }
      console.log('submit');
      return false;
    }
  }
});
