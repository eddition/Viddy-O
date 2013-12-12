$(document).ready(function(){

  App.router = new App.Router();

  $("#search-button").on("click", searchInstagram);

});

function searchInstagram() {
  var hashtag = $("#search-input").val();
  console.log(hashtag);
}