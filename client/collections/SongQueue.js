// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
  },

  add: function(songModel) {
    //Pseudocode
    //check the queue
      //if it's the only song in the queue, trigger play
      //If it's not the only song, don't do anything
    this.push(songModel);
    songModel.enqueue();
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }
});