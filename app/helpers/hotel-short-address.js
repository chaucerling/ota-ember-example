import Ember from 'ember';

export default Ember.Helper.helper(function (params) {
  var address = params[0];
  var index = address.search('（');
  if (index > 0){
    return address.substring(0, index);
  } else {
    return address;
  }
});
