import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:comment']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('must contain a name', function(assert) {
  let model = this.subject({ name: 'testing name'});
  assert.equal(model.get('name'), 'testing name');
});

test('should be able to retrieve the karma of a user', function(assert) {
  let model = this.subject({ name: 'karma user', upvotes: 10, downvotes: 5});
  assert.equal(model.get('karma'), 5);
});
