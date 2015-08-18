import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  actions: {
    select: function (city) {
      this.setProperties({
        'searchOption.city_name': city.get('name'),
        'searchOption.city_code': city.get('id'),
        'searchOption.region'   : '',
        'searchOption.subway'   : '',
        'searchOption.landmark' : '',
      });
      this.transitionToRoute('hotels.search');
    }
  }
});
