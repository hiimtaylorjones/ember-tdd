//import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  knownSpeedOfLight: DS.attr('number', { defaultValue: 0 }),
  learnSpeedOfLight() {
    this.set('knownSpeedOfLight', 100);
  }
});
