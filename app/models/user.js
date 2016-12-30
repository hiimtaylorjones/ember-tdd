//import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  speedOfLight() {
    return "${this.get('name')} travels at 299,792 kilometers per second.";
  }
});
