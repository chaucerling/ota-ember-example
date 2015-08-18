import Ember from 'ember';

function range(start, end) {
  return Array.apply(null, Array(5)).map(function (_, i) {return i;});
}

export default Ember.Helper.helper(function (params) {
  var hour = new Date().getHours();
  if (hour < 8){
    return range(8,16);
  } else {
    return range(hour + 1,16);
  }
});
