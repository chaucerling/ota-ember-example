import Ember from 'ember';

export default Ember.Controller.extend({
  searchOption: {
    city_code: '0210',
    city_name: '上海',
    start_date: '',
    end_date: '',
    brand: '',
    lat: '',
    lng: '',
    filter: '',
    region: '',
    subway: '',
    landmark: '',
    // page: 1,
  },
  setCity: function (name) {
    this.searchOption.city_name = name;
  },
  today: new Date().toJSON().substring(0,10),
});
