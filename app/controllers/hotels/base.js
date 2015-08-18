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
  },
  brands: [
    {text: "全部", value: "all"},
    {text: "如家", value: "rujia"},
    {text: "莫泰", value: "motai"},
    {text: "和颐", value: "heyi"},
    {text: "云上四季", value: "yssj"},
    {text: "颐居", value: "yiju"},
    {text: "如家精选", value: "jingxuan"}
  ],
  sorts: [
    {text: "推荐", value: ""},
    {text: "价格", value: "price"},
    {text: "评分", value: "score"},
    {text: "增值服务", value: "vas"}
  ],
  today: new Date().toJSON().substring(0,10),
});
