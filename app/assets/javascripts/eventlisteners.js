// $(document).ready(function(){
//   //eventListeners();
// });

function eventListeners() {
  $('.preview').on('click', function(e){
    e.preventDefault();
    $node = e.currentTarget.parentNode;
    debugger
    console.log($node);
  });
}
