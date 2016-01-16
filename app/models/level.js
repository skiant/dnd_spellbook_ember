import DS from 'ember-data';

export default DS.Model.extend({
  maxSpells: DS.attr('number', {defaultValue: 0}),
  spells: DS.hasMany('spell'),
});
