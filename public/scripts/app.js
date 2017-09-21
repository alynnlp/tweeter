/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 // Test / driver code (temporary). Eventually will get this from the server.


$(document).ready(function() {

 var tweetData = {
   "user": {
     "name": "Aileen",
     "avatars": {
       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
     },
     "handle": "@alynnlp"
   },
   "content": {
     "text": "If I have seen further it is by standing on the shoulders of giants"
   },
   "created_at": 1461116232227
 }

// tweet objects and then appending each one to the #tweets-container.
//the renderTweets will need to leverage the createTweetElement function
//by passing to it the tweet object, using the returned jQuery object by appending it to the #tweets-container section.

  //generate the DOM structure for a tweet,
  //given a tweet object >> creating markup dynamically with libraries like jQuery.
  function createTweetElement(tweetobject){
  //$('') > going to search for the tag name in html
  //$("< >") > going to add an element TAG
    var $article = $('<article>').addClass('tweet')
    //append additional DOM elements also created via jQuery to the parent
    var $header = $('<header>').addClass('tweetheader');
    var $img = $('<img src= " '+ tweetobject.user.avatars.small +'"/>').addClass('avatar');
    var $pName = $('<p>').addClass('name').text(tweetobject.user.name);
    var $pUsername = $('<p>').addClass('username').text(tweetobject.user.handle);
    var $pContent = $('<p>').addClass('tweet-content').text(tweetobject.content.text);
    var $foot = $('<footer>').addClass('foot');
    var $pDays = $('<p>').addClass('days').text(tweetobject.created_at);

    var $pIcon = $('<p>').addClass('icon');
    var iconsArray = ['fa-flag','fa-retweet','fa-heart'];
    iconsArray.map(function(icon) {
      var iconList = '<i class="fa' + ' ' + icon + '"></i>'
      $pIcon.append(iconList)
    })
    $article.append($header);
    $header.append($img);
    $header.append($pName);
    $header.append($pUsername);
    $article.append($pContent);
    $article.append($foot);
    $foot.append($pDays);
    $foot.append($pIcon);
    // document.getElementsByClassName("tweet").innerHTML = tweetobject; >>will give me an array
    return $article;
  }


  var $form = $('form');
  //submit handler to the form from jQUERY
  $form.submit(function (event) {
    console.log('Button clicked, performing ajax call...');
    event.preventDefault(); //stop form from submitting normally, will stay in the same page
    //get the action attribute from the <form action=""> element
    //Send form data using post with element id && using AJAX requests
    //var posting = $.post( url, $('textarea').val().serialize() );
    var $newInput = $('textarea').val();
    //debugger;
    var newTweet = {
      user: tweetData.user,
      content: {
        text: $newInput
      },
      created_at: Date.now()
    };

    if($newInput === "" ){
      $('.flash-message').text('Type Something');
      event.stopPropagation;
    } else if($newInput.length > 140){
      $('.flash-message').text('Tweet too long');
      event.stopPropagation;
    } else {
      $('#tweetscontainer').append(createTweetElement(newTweet));
    }

    $.ajax({
      url: '/tweets/', //here im getting another page through AJAX
      method: 'POST',
      data: {
        user: tweetData.user,
        text: $('form textarea').val(),
      },
      success: function (data) { //if success funcion to print the URL
        console.log('Success: ', data);
        loadTweets();
        //you are requesting and handling a JSON response
      }
    })
  });

//click to show and hide before tweetting
  var $compose = $('#compose');
  var click = $compose.click(function (event) {
    console.log('Button clicked, performing slide call...');
    event.preventDefault();
    $('.new-tweet').slideToggle();
    $('.textarea').focus();
  });//*** how to slide? and autoTYPE!

  // if clicked, slide down
  // if clicked && not submitted, slide up
  // if submit, post

  //ajax is async so careful where you renderTweets
  function loadTweets(){
    //jQuery to make a request to /tweets and receive the array of tweets as JSON.
    $("#tweetscontainer").empty();
    $.ajax({
      url: '/tweets/', //here im getting another page through AJAX
      method: 'GET',
      success: function (arrayOfTweets) { //if success funcion to print the URL
        console.log('Success: ', arrayOfTweets);
        renderTweets(arrayOfTweets);
        //you are requesting and handling a JSON response
      }
    })
  }

  function renderTweets(tweetarray) {
    tweetarray.forEach(function(tweet){
      var $tweet = createTweetElement(tweet);
      $('#tweetscontainer').prepend($tweet);
    })
  }
    //renderTweets function defined which can take in this array of objects,render them to the DOM,
    //so your success callback function will simply call up the renderTweets,
    //passing it the response from the AJAX request.

    loadTweets();
})

// using the standard form submit process.
// Using jQuery, we can use event handlers
//to prevent the existing form submission,submit the form data using Ajax.
// $( fx(){} );
//.serialize() turn form data into a query string.
//will be sent to the server in the POST request body.
