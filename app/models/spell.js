import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  prepCount: DS.attr('number', { defaultValue: 0}),
  level: DS.belongsTo('level'),
});
