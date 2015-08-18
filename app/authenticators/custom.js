import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      console.log('restore');
      console.log(data.user);
      if (!Ember.isEmpty(data)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: "POST",
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://localhost:3000/hours/api/v1/login',
        data: JSON.stringify({
          phone: options.phone,
          password: options.password
        }),
        crossDomain:true,
        xhrFields: {
          withCredentials: true
        }
      }).then(function(response) {
        Ember.run(function() {
          console.log(response);
          resolve(response);
        });
      }, function(xhr, status, error) {
        var response = JSON.parse(xhr.responseText);
        Ember.run(function() {
          console.log(response);
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },
  invalidate: function(data) {

  }
});
