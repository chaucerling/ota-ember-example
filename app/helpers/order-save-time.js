import Ember from 'ember';

export default Ember.Helper.helper(function (params) {
  var user = params[0];
  if (Ember.isEmpty(user.card_level)){
    return '19';
  } else if (user.card_level <= 3){
    return '20';
  } else return '19';
});
