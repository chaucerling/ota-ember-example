import DS from 'ember-data';

export default DS.Model.extend({
  // region: DS.belongsTo('region'),
  // code: DS.attr('string'),
  name: DS.attr('string'),
  gaode_lat: DS.attr('number'),
  gaode_lng: DS.attr('number'),
  region_name: DS.attr('string'),
  service: DS.attr('string'),
  brand: DS.attr('string'),

  photo: DS.attr('string'),
  ready: DS.attr('boolean'),
  enable: DS.attr('boolean'),
  price: DS.attr('number'),
  sum_avg: DS.attr('number'),
});
