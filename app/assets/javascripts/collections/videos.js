var Videos = Backbone.Collection.extend({

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