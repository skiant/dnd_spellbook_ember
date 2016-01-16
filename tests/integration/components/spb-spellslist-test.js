import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spb-spellslist', 'Integration | Component | spb spellslist', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{spb-spellslist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#spb-spellslist}}
      template block text
    {{/spb-spellslist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
