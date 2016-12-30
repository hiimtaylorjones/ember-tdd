import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('must contain a name and a default known speed of light', function(assert) {
  let model = this.subject({ name: 'testing name'});
  assert.equal(model.get('name'), 'testing name');
  assert.equal(model.get('knownSpeedOfLight'), 0);
});

test('it can learn the speed of light', function(assert) {
  let model = this.subject({ name: 'Taylor'});
  Ember.run(() => model.learnSpeedOfLight());
  assert.equal(model.get('knownSpeedOfLight'), 100);
});
