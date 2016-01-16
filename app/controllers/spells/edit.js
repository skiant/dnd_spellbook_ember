import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(record) {
      record.save();
    },
  },

  levels: this.store.findAll('level'),
});
