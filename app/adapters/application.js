import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'hours/api/v1',
  ajax: function(url, type, options) {
    options = options || {}; // hash may be undefined
    // options.crossDomain = true;
    options.xhrFields = {withCredentials: true};
    return this._super(url, type, options);
  }
});
