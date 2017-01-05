import { moduleForModel, test } from 'ember-qunit';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('must contain a title and body', function(assert) {
  let model = this.subject({ title: 'testing title', body: 'this is a great post'});
  assert.equal(model.get('title'), 'testing title');
  assert.equal(model.get('body'), 'this is a great post');
});
