import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('spell', params.spell_id);
  },

  setupController(controller, model) {
    this._super(controller,model);
    controller.set('levels', this.store.findAll('level'));
  }
});
