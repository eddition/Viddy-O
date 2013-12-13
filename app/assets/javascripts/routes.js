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
    App.main = new App.Views.Main();
  }
});