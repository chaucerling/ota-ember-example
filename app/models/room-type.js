import DS from 'ember-data';

export default DS.Model.extend({
  hotel_code: DS.attr('string'),
  date: DS.attr('string'),
  room_types: DS.attr()
});
