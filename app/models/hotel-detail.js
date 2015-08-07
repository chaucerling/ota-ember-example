import DS from 'ember-data';

export default DS.Model.extend({
  // region: DS.belongsTo('region'),
  // code: DS.attr('string'),
  name: DS.attr('string'),
  desp: DS.attr('string'),
  address: DS.attr('string'),
  tel: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  photos: DS.attr(),
  comments: DS.attr(),
  hotel_notes: DS.attr(),

  gaode_lat: DS.attr('number'),
  gaode_lng: DS.attr('number'),
  region_name: DS.attr('string'),
  service: DS.attr('string'),
  brand: DS.attr('string'),
});
