import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var _this = this
      var data = this.getProperties('phone', 'password');
      return ajax({
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://localhost:3000/hours/api/v1/login',
        data: JSON.stringify({
          phone: data.phone,
          password: data.password
        }),
        crossDomain:true,
        xhrFields: {
          withCredentials: true
        }
      }).then(function(response){
        if (response['code'] === 200) {
          console.log("response:", response['data']);
        } else {
          console.log("response:", response);
        }
      });
    }
  }
});
