import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transition() {
      this.transitionToRoute(...arguments);
    },
    addSpell() {
      this.newSpell = this.store.createRecord('spell');
      this.transitionToRoute('spells.edit', this.newSpell);
    },
    deleteSpell(record) {
      record.deleteRecord();
    }
  }
});
