import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  actions: {
    select: function (city) {
      this.set('searchOption.city_name', city.get('name'));
      this.set('searchOption.city_code', city.get('id'));
      this.set('searchOption.region', '');
      this.set('searchOption.subway', '');
      this.set('searchOption.landmark', '');
      this.transitionToRoute('hotels.search');
    }
  }
});
