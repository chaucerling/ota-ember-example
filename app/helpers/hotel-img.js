import Ember from 'ember';

export function hotelImg(params) {
  var photo = params[0][0];
  return photo;
}

export default Ember.Helper.helper(hotelImg);
