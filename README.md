# Tweeter Project!

A simplified Single Page App (SPA) which is an AJAX-based Twitter clone that uses jQuery, JS, HTML5 and CSS3 to help building this functional posting app.

## Dependencies

- MongoDB
- Express
- Node 5.10.x or above
- Chance

# Behaviour (Back-end)

- DataBase

  - Use MongoDB driver from Node.js to create, read, update and delete data.
  - Tweets are persisted to MongoDB and survive server restart.

- Navigation Bar

  1. When a user clicks the Compose button...

      ["Auto-focused text area"](https://github.com/alynnlp/tweeter/blob/master/docs/composeBox.png?raw=true)

      ["The transition between 'shown' and 'hidden' states of Tweet Box is animated"](https://github.com/alynnlp/tweeter/blob/master/docs/toggleBox.png?raw=true)

  2. When form is being submitted...

      Communicates with the server via AJAX, requesting and handling a JSON response instead of an HTML response

  3. Character Counter

      ["Show how many characters a user may still type"](https://github.com/alynnlp/tweeter/blob/master/docs/characterCount.png?raw=true)
      Condition applied when characters exceeded limit or no input before submitting


# Display (Front-end: HTML5 and CSS3)

- Navigation Bar:

  - Fixed Bar and is displayed above the list of tweets

- List of Tweets:

  ["How long ago the tweet was created and Multiple hover effect"](https://github.com/alynnlp/tweeter/blob/master/docs/dayscountAndHover.png?raw=true)

  - "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right

  - Used float, clear-fix, flex, padding to correctly position contents within the Tweeter box; Tweets in reverse-chronological order

  - Usage of Hex color code, opacity upon hovering to create comfortable User Experience
