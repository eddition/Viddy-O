App.Views.Main = Backbone.View.extend({

  el: '#main',

  events: {
    'click #search-button' : 'showVideos'
  },
  initialize: function(){
    console.log('view loaded');
  },
  showVideos: function() {
    console.log('searched videos');

    //get the user input
    var hashtag = $('#search-input').val();
    // add video model
    var videos = new Videos( {hashtag: hashtag} );
    // videos.models[0].get('hashtag')
    // debugger;
    console.log(videos);

  }

});
