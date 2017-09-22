# Tweeter Project!

A simplified Single Page App (SPA) which is an AJAX-based Twitter clone that uses jQuery, JS, HTML5 and CSS3 to help building this functional posting app.

Tweets are persisted to MongoDB and survive server restart.

## Dependencies

- MongoDB
- Express
- Node 5.10.x or above
- Chance

# Behaviour (Back-end)

- DataBase

  - Use MongoDB driver from Node.js to create, read, update and delete data. Save tweets/data to MongoDB

- Navigation Bar

  1. When a user clicks the Compose button...

      ["Auto-focused text area"](https://github.com/alynnlp/tweeter/blob/master/docs/composeBox.png?raw=true)
      Text-area is auto-focused

      ["Transitions between shown and hidden states of Tweet box"](https://github.com/alynnlp/tweeter/blob/master/docs/toggleBox.png?raw=true)
      The transition between 'shown' and 'hidden' states is animated

  2. When form is being submitted...

      Communicates with the server via AJAX, requesting and handling a JSON response instead of an HTML response

  3. Character Counter

      ["Character Counter"](https://github.com/alynnlp/tweeter/blob/master/docs/characterCount.png?raw=true)
      Show how many characters a user may still type. Condition applied when characters exceeded limit or no input before submitting


# Display (Front-end: HTML5 and CSS3)

- Navigation Bar:

  - Fixed Bar and is displayed above the list of tweets

- List of Tweets:

  ["how long ago the tweet was created"](https://github.com/alynnlp/tweeter/blob/master/docs/dayscountAndHover.png?raw=true)

  - Tweets in reverse-chronological order

  - Used float, clear-fix, flex, padding to correctly position contents within the Tweeter box

  - footer displays how long ago the tweet was created, on the left

  - "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right
