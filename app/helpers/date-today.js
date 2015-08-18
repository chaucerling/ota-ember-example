import Ember from 'ember';

export function dateToday(params) {
  var time = params[0];
  return new Date().toJSON().substring(0,10);
}

export default Ember.Helper.helper(dateToday);
