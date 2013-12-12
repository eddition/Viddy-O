App.Views.Main = Backbone.View.extend({

  el: '#videos',

  events: {
    'click #search-button' : 'showVideos'
  },
  initialize: function(){
    console.log('view loaded');
  },
  showVideos: function() {
    console.log('searched videos');
  }

});
