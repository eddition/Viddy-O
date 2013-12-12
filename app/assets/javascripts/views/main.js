App.Views.Main = Backbone.View.extend({
  el: "#videos",
  events: {
    "click #search-button" : "showVideos"
    // "click #signup_button"  : "showSignup",
    // "click #login_button"   : "showLogin",
  },
  initialize: function(){
    console.log('view loaded');
  },
  showVideos: function() {
    console.log("videos show");

  }
});
