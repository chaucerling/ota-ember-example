import Ember from 'ember';
// import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  loginFailed: false,
  isProcessing: false,
  failedResult: null,
  actions: {
    authenticate: function() {
      var self = this;
      this.setProperties({
        loginFailed: false,
        isProcessing: true
      });

      var credentials = this.getProperties('phone', 'password');
      this.get('session').authenticate('authenticator:custom', credentials).then(
        function(response){
          self.set("isProcessing", false);
          self.transitionToRoute('hotels.search');
        },
        function(response){
          self.set("isProcessing", false);
          self.set("loginFailed", true);
          self.set("failedResult", response.result);
        }
      );
    }
  }
});
