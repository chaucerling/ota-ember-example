import Ember from 'ember';

export function showRegion(params) {
  var options = params[0];
  var _temp = options.region + options.subway + options.landmark;
  if (_temp === '') {
    return '区域/商圈/地铁';
  }else{
    return _temp;
  }
}

export default Ember.HTMLBars.makeBoundHelper(showRegion);
