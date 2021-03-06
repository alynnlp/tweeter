/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
  //the renderTweets will need to leverage the createTweetElement function
  //by passing to it the tweet object, using the returned jQuery object by appending it to the #tweets-container
  //generate the DOM structure for a tweet with libraries like jQuery.
  function createTweetElement(tweetobject) {
  //$('') > going to search for the tag name in html; $("< >") > going to add an element TAG
    var $article = $('<article>').addClass('tweet');
    var $header = $('<header>').addClass('tweetheader');
    var $img = $('<img src= " '+ tweetobject.user.avatars.small +'"/>').addClass('avatar');
    var $pName = $('<p>').addClass('name').text(tweetobject.user.name);
    var $pUsername = $('<p>').addClass('username').text(tweetobject.user.handle);
    var $pContent = $('<p>').addClass('tweet-content').text(tweetobject.content.text);
    var $foot = $('<footer>').addClass('foot');
    var $pDays = $('<p>').addClass('days');
    var daysNum = tweetobject['created_at'];

    function daysAgo(longNum){
      roundUp = ((Date.now() - longNum) / (1000 * 60 * 60 * 24 ));
      if (roundUp <= 1) {
        days = '<p>' + Math.floor(roundUp) + ' day ago</p>';
      } else {
        days = '<p>' + Math.floor(roundUp) + ' days ago</p>';
      }
      $pDays.append(days);
    }
    daysAgo(daysNum);

    var $pIcon = $('<p>').addClass('icon');
    var iconsArray = ['fa-flag','fa-retweet','fa-heart'];
    iconsArray.map(function(icon) {
      var iconList = '<i class="fa' + ' ' + icon + '"></i>';
      $pIcon.append(iconList);
    });

    $article.append($header);
    $header.append($img);
    $header.append($pName);
    $header.append($pUsername);
    $article.append($pContent);
    $article.append($foot);
    $foot.append($pDays);
    $foot.append($pIcon);
    return $article;
  }

  var $compose = $('#compose');
  var click = $compose.click(function (event) {
    console.log('Button clicked, performing slide call...');
    event.preventDefault();
    $('.new-tweet').slideToggle();
    $('.textarea').focus();
  });

  var $form = $('form');
  //submit handler to the form from jQUERY
  $form.submit(function (event) {
    console.log('Button clicked, performing ajax call...');
    event.preventDefault(); //stop form from submitting normally > will stay in the same page
    var $newInput = $('textarea').val();
    var newTweet = {
      user: tweetData.user,
      content: {
        text: $newInput,
      },
      created_at: Date.now(),
    };

    if($newInput === "" ){
      $('.flash-message').text('Type Something');
      event.stopPropagation;
    } else if($newInput.length > 140){
      $('.flash-message').text('Tweet too long');
      event.stopPropagation;
    } else {
      $('#tweetscontainer').append(createTweetElement(newTweet));
    };

    //Send form data using post with element id && using AJAX requests
    $.ajax({
      url: '/tweets/', //here im posting through AJAX
      method: 'POST', //into the POST request body in the server
      data: {
        user: tweetData.user,
        text: $('form textarea').val(),
      },
      success: function (data) {
        console.log('Success: ', data);
        loadTweets();//load tweets from DB,
      },
    });
  });

  //ajax is async, renderTweets once the REQUEST is done
  function loadTweets(){
    //jQuery to make a request to /tweets and receive the array of tweets as JSON.
    $("#tweetscontainer").empty();
    $.ajax({
      url: '/tweets/', //im getting another page through AJAX
      method: 'GET',
      success: function (arrayOfTweets) {
        console.log('Success: ', arrayOfTweets);
        renderTweets(arrayOfTweets);
      },
    });
  };
  //forEach of the element in the Array create DOM structure and append
  function renderTweets(tweetarray) {
    tweetarray.forEach(function(tweet){
      var $tweet = createTweetElement(tweet);
      $('#tweetscontainer').prepend($tweet);
    });
  };
    loadTweets();
})

//document.getElementsByClassName("tweet").innerHTML = tweetobject; >>will give me an array
