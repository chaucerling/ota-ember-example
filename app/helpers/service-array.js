import Ember from 'ember';

export default Ember.Helper.helper(function (params) {
  var str = params[0];
  return str.split(',').map(function(n) {return parseInt(n)});
});
