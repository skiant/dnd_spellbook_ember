import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(record) {
      record.save();
      this.transitionToRoute('levels');
    },
  }
});
