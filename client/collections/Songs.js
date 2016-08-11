// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  //All models in the collection should have the attributes of the song model
  model: SongModel,

  //Parse is run on a server request's response each time you fetch (default is no-op)
  parse: function(response) {
    return response.results;
  },

  //This sepcifies where fetch should perform the AJAX request
  url: 'https://api.parse.com/1/classes/songs',

  initialize: function() {
    //error and success options are just there to check results in the console.
    this.fetch({error: function(err) { console.log('this is an error!', err); },
                success: function(succ) { console.log('this is a success', succ); }
                });

  },



});