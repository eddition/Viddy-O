App.Router = Backbone.Router.extend({
  routes: {
    ""  : "index",
    "compilations/:id" : "show"
  },
  initialize: function(){
    Backbone.history.start({ pushState: true });
  },
  index: function(){
    console.log('index');
  },
  show: function(){
    console.log('show');
    var hashtag = $('#search-input').val();
    this.collections = new Videos({hashtag: hasg})
    console.log(hashtag)
  }
});

