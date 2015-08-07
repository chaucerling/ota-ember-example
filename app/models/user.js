import DS from 'ember-data';

export default DS.Model.extend({
  account_desc: DS.attr('string'),
  account_level: DS.attr('number'),
  auth_token: DS.attr('string'),
  balance: DS.attr('number'),
  card_code: DS.attr('string'),
  card_level: DS.attr('string'),
  card_type: DS.attr('string'),
  card_type_name: DS.attr('string'),
  code: DS.attr('string'),
  coupon_num: DS.attr('number'),
  ctf_code: DS.attr('string'),
  down_expire_date: DS.attr('date'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  next_level_nights: DS.attr('number'),
  nights: DS.attr('number'),
  phone: DS.attr('string'),
  points: DS.attr('number'),
});
