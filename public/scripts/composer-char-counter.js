//to make sure the document is ready before the JS is run
$( document ).ready(function() {
  //when is ready please print document loaded on console
  console.log( "document loaded" );

  var $textarea = $('textarea');
  var $counter = $('span.counter')
  $textarea.on('keydown', function(e) {
    const count = 140 - $(this).val().length;
    if(count < 0){
      $counter.addClass('negative');
    } else if (count > 0) {
      $counter.removeClass('negative');
    }
    $counter.text(count); //.text() is to change the content of jQuery
  });
});

// var textarea = document.getElementsByTagName("textarea")[0]
//
// for(let i = 0; i < textarea.length; i++) {
//   textarea[i].addEventListener('keydown', function (e){
//     console.log ($(this));
//   })
// }
