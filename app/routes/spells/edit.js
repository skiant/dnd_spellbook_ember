import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.find('spell', this.spell_id);
    let spell_id = this.spell_id;
    return Ember.RSVP.hash({
      spell: this.store.find('spell', spell_id),
      levels: this.store.findAll('level'),
    });
  }
});
