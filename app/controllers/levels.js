import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transition() {
      this.transitionToRoute(...arguments);
    },
    addLevel() {
      this.newLevel = this.store.createRecord('level');
      this.transitionToRoute('levels.edit', this.newLevel);
    },
    deleteLevel(record) {
      this.transitionToRoute('levels');
      record.destroyRecord();
    }
  }
});
