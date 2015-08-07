import DS from 'ember-data';

export default DS.Model.extend({
  // city: DS.belongsTo('city'),
  regions: DS.attr(),
  subways: DS.attr(),
  landmarks: DS.attr()
});
