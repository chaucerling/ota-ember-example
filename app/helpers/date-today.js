import Ember from 'ember';

export function dateToday(params) {
  return new Date().toJSON().substring(0,10);
}

export default Ember.Helper.helper(dateToday);
