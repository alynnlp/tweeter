//to make sure the document is ready before the JS is run
$( document ).ready(function() {
  //when is ready please print document loaded on console
        console.log( "document loaded" );
    //START
    //textarea is the element tag
        //('')to change the html element to jQuery state which can
        //perform different function like addclass and removeclass
        var $textarea = $('textarea');
        var $counter = $('span.counter')

        //$ is jquery that return [], other is DOM < >
        $textarea.on('keydown', function(e) {
          //this is the function when event keydown is fired
          //this will turn the input to value ''  as string
          //i take the length of it and subtracted it from 140
          const count = 140 - $(this).val().length;

          //.text() is to change the content of jQuery
          if(count < 0){
            $counter.addClass('negative');
          } else if (count > 0) {
            $counter.removeClass('negative');
          }
          $counter.text(count);
        });


    });

// var textarea = document.getElementsByTagName("textarea")[0]
//
// for(let i = 0; i < textarea.length; i++) {
//   textarea[i].addEventListener('keydown', function (e){
//     console.log ($(this));
//   })
// }


// $("textarea").keydown(function() {
//    }
// });

//To turn the DOM element into a jQuery object that
//we can use jQuery methods on, we simply do $( this ),
//
// (function() {
//   var textarea = $(e.target)
// }).bind(this)
//
// (e) => {
//   var textarea = $(e.target)
// }
