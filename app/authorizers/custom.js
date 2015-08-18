import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

export default Base.extend({
  authorize: function(jqXHR, requestOptions) {
    requestOptions.crossDomain = true;
    requestOptions.xhrFields = {
      withCredentials: true
    };
  }
});
