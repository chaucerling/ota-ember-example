import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return Ember.RSVP.hash({
      hotel: this.store.find('hotel-detail', params.hotel_id),
      room: this.store.find('room-type', params.hotel_id)
    });
  },
  // afterModel: function(){
  //   var hotel = this.modelFor('hotels.show').hotel;
  //   // if (typeof(hotel.get('desp')) === 'undefined'){
  //     hotel.reload();
  //   // }
  // },
});
