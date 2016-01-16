import Ember from 'ember';

export default Ember.Component.extend({
  cannotRemovePrep: Ember.computed('prepCount', function () {
    return this.prepCount <= 0;
  }),

  cannotAddPrep: Ember.computed('maxCount', 'currentCount', function () {
    return this.currentCount >= this.maxCount;
  }),

  actions: {
    addPrep() {
      this.incrementProperty('prepCount');
    },

    removePrep() {
      if (this.get('prepCount') > 0) {
        this.decrementProperty('prepCount');
      }
    }
  }
});
