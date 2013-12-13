var Videos = Backbone.Collection.extend({

  sync: function(){
    var params = _.extend({
      type:       'GET',
      dataType:   'jsonp'
    });
  },
  // NEED
  //  var ajaxFn = $.ajax({
  //     type: 'get',
  //     url: "https://api.instagram.com/v1/tags/wdirandom/media/recent?count=1000&client_id=059f1ecfb8df4f0f9e65cbf84e6a1702",
  //     dataType: "jsonp",
  //   }).done(function(response){
  //   this.response = response
  //   })
  // ajaxFn gives back an object of videos

  model: Video,

  url: function() {
    return "https://api.instagram.com/v1/tags/" + this.hashtag + "/media/recent?count=1000&client_id=059f1ecfb8df4f0f9e65cbf84e6a1702";
  },

  initialize: function(options){
    this.hashtag = options.hashtag;
    // console.log(this.hashtag);
    this.fetch();
  }

});