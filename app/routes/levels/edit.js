import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('level', this.level_id);
  }
});
