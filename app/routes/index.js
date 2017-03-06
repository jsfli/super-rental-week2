import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return Ember.RSVP.hash({
       rentals: this.store.findAll('rental'),
       reviews: this.store.findAll('review'),
       announcements: this.store.findAll('announcement')
     });
   },
   actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement){
      announcement.destroyRecord();
      this.transitionTo('index');
    },

    saveAnnouncement(params){
      var newAnnouncement = this.store.createRecord('announcement',params);
      newAnnouncement.save();
      this.transitionTo('index');
    }
  }
});
