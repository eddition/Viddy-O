App.Views.Main = Backbone.View.extend({

  el: '#main',

  events: {
    'click #search-button' : 'findVideos'
  },
  initialize: function() {
    console.log('view loaded');
  },
  findVideos: function() {
    console.log('searched videos');

    //get the user input
    var hashtag = $('#search-input').val();
    // add video collection
    this.collection = new Videos( {hashtag: hashtag} );

    this.listenTo(this.collection, "sync", this.showVideos);
  },
  showVideos: function() {
    //go thru everything we receive from Instagram
    var data = this.collection.models;
    for (var i = 0; i < data.length; i++ ){
      var type = data[i].attributes.type;
      //if the data type is a video, render it out
      if (type === 'video') {
        this.renderVideo(data[i]);
      }
    }
  },
  renderVideo: function(video) {
    console.log(video);
    // <video width="320" height="240" controls>
    //   <source src="movie.mp4" type="video/mp4">
    //   <source src="movie.ogg" type="video/ogg">
    // Your browser does not support the video tag.
    // </video>
    var url = video.attributes.videos.standard_resolution.url;
    $('#videos').append('<video width="320" height="240" controls><source src="' + url + '" type="video/mp4"></video>');
    $('#video-sequence').append('<div class="sequence"></div>');
  }

});
