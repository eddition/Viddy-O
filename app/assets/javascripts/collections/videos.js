var Videos = Backbone.Collection.extend({

  model: Video,

  url: function() {
    return "https://api.instagram.com/v1/tags/" + this.hashtag + "/media/recent?count=1000&client_id=059f1ecfb8df4f0f9e65cbf84e6a1702";
  },

  initialize: function(options){
    this.hashtag = options.hashtag;
    //change data type to jsonpDIZZLE to get access to the Instagram backend
    this.fetch({dataType: 'jsonp'});
  },

  parse: function(response){
    return response.data;
  }

});