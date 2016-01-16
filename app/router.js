import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('levels', function() {
    this.route('edit', {path: '/:level_id'});
  });
  this.route('spellbook');
  this.route('spells', function() {
    this.route('edit', {path: '/:spell_id'});
  });
});

export default Router;
