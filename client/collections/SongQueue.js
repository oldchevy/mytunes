// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,


  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.at(0).dequeue();
      if (this.at(0)) {
        this.playFirst();        
      }
    });

    this.on('dequeue', this.remove);
  },


  playFirst: function() {
    this.at(0).play();
  }
});