import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  queryParams: ['city_code'],
  actions: {
    selectRegion: function (filter, name) {
      this.set('searchOption.city_code', this.get('city_code'));
      switch(filter){
        case 'region':
          this.set('searchOption.region', name);
          this.set('searchOption.subway', '');
          this.set('searchOption.landmark', '');
          break;
        case 'subway':
          this.set('searchOption.region', '');
          this.set('searchOption.subway', name);
          this.set('searchOption.landmark', '');
          break;
        case 'landmark':
          this.set('searchOption.region', '');
          this.set('searchOption.subway', '');
          this.set('searchOption.landmark', name);
          break;
      }
      this.transitionToRoute('hotels.search');
    }
  }
});
