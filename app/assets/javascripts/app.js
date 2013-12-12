$(document).ready(function(){

  App.router = new App.Router();

  $("#search-button").on("click", searchInstagram);

});

function searchInstagram() {
  hashtag = $("#search-input").val();
  console.log(hashtag)
}