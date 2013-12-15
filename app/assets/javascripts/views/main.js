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

    // <li class="ui-widget-content ui-corner-tr">
    // <h5 class="ui-widget-header">High Tatras</h5>
    // <img src="http://www.underconsideration.com/brandnew/archives/google_broken_image_06_bliss.gif" alt="The peaks of High Tatras" width="96" height="72">
    // <a href="images/high_tatras.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>
    // <a href="link/to/trash/script/when/we/have/js/off" title="Delete this image" class="ui-icon ui-icon-trash">Sequence It</a>
    // </li>

    // debugger;
    var imageUrl = video.attributes.images.standard_resolution.url;
    var videoUrl = video.attributes.videos.standard_resolution.url;
    //'<video width="320" height="240" controls><source src="' + url + '" type="video/mp4"></video>'
    $('#gallery').append('<li video link="' + videoUrl + '"class="ui-widget-content ui-corner-tr"><img src="' + imageUrl + '" alt="The peaks of High Tatras" width="96" height="72"><a href="' + imageUrl  + '" title="View larger image" class="ui-icon ui-icon-zoomin">Preview</a><a href="link/to/trash/script/when/we/have/js/off" title="Delete this image" class="ui-icon ui-icon-trash">Sequence It</a></li>');

    //add the functionality of the dynamic adding
      $(function() {
      // there's the gallery and the trash
      var $gallery = $( "#gallery" ),
        $trash = $( "#trash" );

      // let the gallery items be draggable
      $( "li", $gallery ).draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move"
      });

      // let the trash be droppable, accepting the gallery items
      $trash.droppable({
        accept: "#gallery > li",
        activeClass: "ui-state-highlight",
        drop: function( event, ui ) {
          deleteImage( ui.draggable );
        }
      });

      // let the gallery be droppable as well, accepting items from the trash
      $gallery.droppable({
        accept: "#trash li",
        activeClass: "custom-state-active",
        drop: function( event, ui ) {
          recycleImage( ui.draggable );
        }
      });

      // image deletion function
      var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
      function deleteImage( $item ) {
        $item.fadeOut(function() {
          var $list = $( "ul", $trash ).length ?
            $( "ul", $trash ) :
            $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );

          $item.find( "a.ui-icon-trash" ).remove();
          $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
            $item
              .animate({ width: "48px" })
              .find( "img" )
                .animate({ height: "36px" });
          });
        });
      }

      // image recycle function
      var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
      function recycleImage( $item ) {
        $item.fadeOut(function() {
          $item
            .find( "a.ui-icon-refresh" )
              .remove()
            .end()
            .css( "width", "96px")
            .append( trash_icon )
            .find( "img" )
              .css( "height", "72px" )
            .end()
            .appendTo( $gallery )
            .fadeIn();
        });
      }

      // image preview function, demonstrating the ui.dialog used as a modal window
      function viewLargerImage( $link ) {
        var src = $link.attr( "href" ),
          title = $link.siblings( "img" ).attr( "alt" ),
          $modal = $( "img[src$='" + src + "']" );

        if ( $modal.length ) {
          $modal.dialog( "open" );
        } else {
          var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
            .attr( "src", src ).appendTo( "body" );
          setTimeout(function() {
            img.dialog({
              title: title,
              width: 400,
              modal: true
            });
          }, 1 );
        }
      }

      // resolve the icons behavior with event delegation
      $( "ul.gallery > li" ).click(function( event ) {
        var $item = $( this ),
          $target = $( event.target );

        if ( $target.is( "a.ui-icon-trash" ) ) {
          deleteImage( $item );
        } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
          viewLargerImage( $target );
        } else if ( $target.is( "a.ui-icon-refresh" ) ) {
          recycleImage( $item );
        }

        return false;
      });
    });

  }

});
