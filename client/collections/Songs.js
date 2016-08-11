// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  initialize: function() {
    this.fetch({success: function(data) {
      console.log(data);
    }});
    // var serverSongs = [];
    // //var addSong = this.add().bind(this);
    // $.get('https://api.parse.com/1/classes/songs', function(data) {
    //   data.results.forEach(function(oneSong) {
    //     serverSongs.push(oneSong);
    //   });
    // });
    // console.log(serverSongs);
    // this.add(serverSongs);
    // console.log(this);
  },

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',

});