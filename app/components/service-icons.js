import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'show_hotel_services',
  serviceStr: null,
  serviceIcons: function(){
    var str = this.get('serviceStr');
    var icons = this.get('icons');
    return str.split(',').map(function(n) {return icons[n]}).filter(Boolean);
  }.property('service'),
  icons: {
    1003: {
      path: 'assets/images/services/wifi.png',
      alt: 'WIFI'
    },
    1014: {
      path: 'assets/images/services/parking.png',
      alt: '免费停车'
    },
    1004: {
      path: 'assets/images/services/餐厅.png',
      alt: '餐厅'
    },
    1010: {
      path: 'assets/images/services/加床.png',
      alt: '加床'
    },
    1017: {
      path: 'assets/images/services/无烟房.png',
      alt: '无烟房'
    },
    1019: {
      path: 'assets/images/services/有线电视.png',
      alt: '有线电视'
    },
    1005: {
      path: 'assets/images/services/吹风机.png',
      alt: '吹风机'
    },
    1020: {
      path: 'assets/images/services/中央空调.png',
      alt: '中央空调'
    }
  }
});
