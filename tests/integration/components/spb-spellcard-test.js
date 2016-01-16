import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spb-spellcard', 'Integration | Component | spb spellcard', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{spb-spellcard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#spb-spellcard}}
      template block text
    {{/spb-spellcard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
