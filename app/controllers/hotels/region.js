import HotelsBaseController from './base';

export default HotelsBaseController.extend({
  queryParams: ['city_code'],
  actions: {
    selectRegion: function (filter, name) {
      this.set('searchOption.city_code', this.get('city_code'));
      switch(filter){
        case 'region':
          this.setProperties({
            'searchOption.region'  : name,
            'searchOption.subway'  : '',
            'searchOption.landmark': '',
          });
          break;
        case 'subway':
          this.setProperties({
            'searchOption.region'  : '',
            'searchOption.subway'  : name,
            'searchOption.landmark': '',
          });
          break;
        case 'landmark':
          this.setProperties({
            'searchOption.region'  : '',
            'searchOption.subway'  : '',
            'searchOption.landmark': name,
          });
          break;
      }
      this.transitionToRoute('hotels.search');
    }
  }
});
