import Ember from 'ember';

export default Ember.Helper.helper(function (params) {
  var address = params[0];
  if(address.length > 8){
    return address.substring(0,8) + '...';
  }
  else {
    return address;
  }
});
