function eventListeners() {
  $('.preview').on('click', playPreivew);

  $('#seq-button').on('click', playSeq);
  //add and remove the control bar for seamless transitions
  $('.video-player').on('mouseover', addControlBar);
  $('.video-player').on('mouseout', removeControlBar);
}

function playPreivew(e){
  e.preventDefault();
  $node = $(e.currentTarget.parentNode);
  var videoLink = $node.data('video_link');

  var videoPlayer = $('video:first')[0];
  videoPlayer.src = videoLink;
  videoPlayer.load();
  videoPlayer.play();
}

function playSeq(){
  var $videos = $('#sequence-videos').children('li');
  //put all of the sequence links into an array
  var videoLinks = _.map($videos, function(video){
    return $(video).data('video_link');
  });

  var videoPlayer = $('video:first')[0];
  var i = 0;
  videoPlayer.src = videoLinks[i];
  videoPlayer.play();

  $(videoPlayer).on('ended', function(){
    ++i;
    if (i < videoLinks.length){
      videoPlayer.src = videoLinks[i];
      videoPlayer.play();
    }
  });
  i = 0;
}

function addControlBar() {
  $('.video-player').attr('controls', true);
}

function removeControlBar() {
  $('.video-player').attr('controls', false);
}








