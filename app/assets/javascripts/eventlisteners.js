function eventListeners() {
  $('.preview').on('click', playPreivew);
  $('#seq-button').on('click', playSeq);
}

function playPreivew(e){
  e.preventDefault();
  $node = $(e.currentTarget.parentNode);
  var videoLink = $node.data('video_link');

  var currentVideo = $('video:first')[0];
  currentVideo.src = videoLink;
  currentVideo.load();
  currentVideo.play();
}

function playSeq(){
  var videos = $('#sequence-videos')[0].children
  debugger;
}
