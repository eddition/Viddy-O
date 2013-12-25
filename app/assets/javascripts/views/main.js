App.Views.Main = Backbone.View.extend({
  el: '#main',
  events: {
    'submit #search'          : 'findVideos',
    'click #save-compilation' : 'saveVideos'
  },

  initialize: function() {
    console.log('view loaded');
    var compilationId;
    this.compId();
    this.renderSeq();
  },

  compId: function(){
    var urlArray = document.URL.split('');
    var reverseSlashIndex = urlArray.reverse().indexOf('/');
    var slashIndex = urlArray.length - reverseSlashIndex;
    compilationId = urlArray.reverse().slice(slashIndex, urlArray.length).join('');
  },

  findVideos: function(e) {
    e.preventDefault();

    // clear the bouncing search tag
    $('h2').remove();
    // remove the tv placeholder
    $('#tv-placeholder').remove();

    console.log('searched videos');
    var input = $('#search-input').val().split('');
    var hashtag;
    if(input[0] === '#'){
      input.shift();
      hashtag = input.join("");
    }else{
      hashtag = $('#search-input').val();
    }

    $('#search-input').val();
    // add video collection
    this.collection = new Videos( {hashtag: hashtag} );
    this.listenTo(this.collection, "sync", this.showVideos);
  },

  showVideos: function() {
    //go thru everything we receive from Instagram
    var hashtag = this.collection.hashtag;
    var data = this.collection.models;
    var urlArray = document.URL.split('');
    var reverseSlashIndex = urlArray.reverse().indexOf('/');
    var slashIndex = urlArray.length - reverseSlashIndex;
    var compId = urlArray.reverse().slice(slashIndex, urlArray.length).join('');
    for (var i = 0; i < data.length; i++ ){
      var type = data[i].attributes.type;
      //if the data type is a video, render it out
      if (type === 'video') {
        this.renderVideo(data[i], hashtag);
      }
    }
    eventListeners();
    jQueryUi();
  },

  renderVideo: function(video, hashtag) {

    var imageUrl = video.attributes.images.low_resolution.url;
    var videoUrl = video.attributes.videos.standard_resolution.url;
    $( '#gallery' ).append( '<li data-video_link="' + videoUrl +
      '" data-img_link="' + imageUrl +
      '" class="ui-widget-content ui-corner-tr"><h5 class="ui-widget-header">#' + hashtag +
      '</h5><img src="' + imageUrl +
      '" alt="The peaks of High Tatras" width="96" height="72"><a href="' + imageUrl  +
      '" title="View larger image" class="preview">View</a><a href="link/to/trash/script/when/we/have/js/off" '+
      ' title="Delete this image" class="ui-icon ui-icon-trash">Sequence</a></li>' );
  },

  saveVideos: function(){
    var sequence = $('#sequence-videos').children();
    sequence.each(function(i){
      var seq_id = i+1;
      var compilation_id = compilationId;
      var video_url = $(sequence[i]).data('video_link');
      var img_url = $(sequence[i]).data('img_link');
      var newVideo = {video: {video_url: video_url,compilation_id: compilation_id, seq_id: seq_id, img_url: img_url }};
      $.ajax({
        type: 'POST',
        url: '/videos',
        data: newVideo,
        dataType: 'json'
      }).done(function(response){
        console.log(response);
      });
    });
  },

  renderSeq: function(){
    $.ajax({
      type: 'GET',
      url: '/compilations',
      data: {id: compilationId},
      dataType: 'json'
    }).done(function(response){
      $('#trash').append($("<ul class='gallery ui-helper-reset' id='sequence-videos'></ul>"));
      _.each(response, function(video){
        console.log(video.video_url);
        $('#sequence-videos').append($("<li data-video_link="+video.video_url+
          " data-img_link="+video.img_url+
          " class='ui-widget-content ui-corner-tr ui-draggable' style='display: list-item; overflow: hidden; width: 48px;''><h5 class='ui-widget-header'></h5><img src="+video.img_url+
          " alt='The peaks of High Tatras' width='96' height='72' style='display: inline-block; overflow: hidden; height: 36px;'><a href="+video.img_url+
          " title='View larger image' class='preview'>View</a><a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Nope</a></li>")
        );
      });
      //only run if compilation exists
      //add controls
      addControlBar();
      //remove placeholder
      $('#tv-placeholder').remove();
      //play sequence
      // playSeq();
      //load up jQuery
      eventListeners();
      jQueryUi();
    });
  }

});






