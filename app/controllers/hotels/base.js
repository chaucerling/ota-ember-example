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
    {title: "全部", value: "all"},
    {title: "如家", value: "rujia"},
    {title: "莫泰", value: "motai"},
    {title: "和颐", value: "heyi"},
    {title: "云上四季", value: "yssj"},
    {title: "颐居", value: "yiju"},
    {title: "如家精选", value: "jingxuan"}
  ],
  sorts: [
    {title: "推荐", value: "all"},
    {title: "价格", value: "price"},
    {title: "评分", value: "score"},
    {title: "增值服务", value: "vas"}
  ],
  today: new Date().toJSON().substring(0,10),
});
