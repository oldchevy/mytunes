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

    var context = this;
    //Use context = this to reference the queue
    //(bind wansn't working for some reason)
    //Logic triggers playing the next song if the song removed from the queue was the first one
    this.on('dequeue', function(song) {
      if (context.at(0) === song) {
        context.remove(song.cid);
        if (context.length !== 0) {
          context.playFirst();
        }
      } else {
        context.remove(song.cid); 
      }
    });
  },


  playFirst: function() {
    this.at(0).play();
  }
});