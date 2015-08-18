import DS from 'ember-data';

export default DS.Model.extend({
  // rujia-api
  first_day_price: DS.attr('number'),
  total_price: DS.attr('number'),
  coupon_price: DS.attr('number'),
  origin_price: DS.attr('number'),
  is_coupon_order: DS.attr('boolean'),
  alipay: DS.attr('boolean'),
  balance: DS.attr('boolean'),
  wxpay: DS.attr('boolean'),
  unipay: DS.attr('boolean'),
  save_time: DS.attr('string'),
  must_pay_now: DS.attr('boolean'),
  pay_promo: DS.attr(''),
  pay_sale_msg: DS.attr(''),
  pay_promotion: DS.attr(''),
  book_promotion: DS.attr(''),
  cancel_tips: DS.attr('string'),

  hotel: DS.belongsTo('hotel-detail'),
  room: DS.attr(),

  //post
  hotel_code: DS.attr('string'),
  room_type: DS.attr('string'),
  sale_code: DS.attr('string'),
  contact_name: DS.attr('string'),
  contact_phone: DS.attr('string'),
  amount: DS.attr('number'),
  start_time: DS.attr('string'),
});
