//
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  upvotes: DS.attr('number'),
  downvotes: DS.attr('number'),
  karma() {
    return this.get('upvotes') - this.get('downvotes');
  }
});
