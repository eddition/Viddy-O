function eventListeners() {
  $('.preview').on('click', function(e){
    e.preventDefault();
    $node = $(e.currentTarget.parentNode);
    var videoLink = $node.data('video_link');

    var currentVideo = $('video:first')[0];
    currentVideo.src = videoLink;
    currentVideo.load();
    currentVideo.play();

  });
}
