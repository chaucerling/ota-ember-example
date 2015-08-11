import Ember from 'ember';

export default Ember.Component.extend({
  lng: null,
  lat: null,
  containerClass: null,
  insertMap: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var position = new AMap.LngLat(this.get('lng'), this.get('lat'));
      var mapObj = new AMap.Map(
        "map_container", {
          view: new AMap.View2D({
            center: position,
            zoom: 14,
            rotation: 0
          }),
          lang: "zh_cn"
        }
      );
      var marker = new AMap.Marker({
        icon: "http://webapi.amap.com/images/0.png",
        position: position
      });
      marker.setMap(mapObj);
    });
  }.on('didInsertElement')
});
