# Tweeter Project!

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3 to help

Practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.



Primarily a client-side Single Page App (SPA)
The client-side app communicates with a server via AJAX
Tweets are persisted to MongoDB and survive server restart

## Dependencies

- Express
- Node 5.10.x or above
- MongoDB
- Chance

# Behaviour (back-end)

Navigation Bar

When a user clicks the Compose button in the Navigation Bar:
if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
if the Compose Tweet box is currently showing, then it is hidden
in either case, transitions between 'shown' and 'hidden' states should be animated
Character Counter
["transitions between shown and hidden states of Tweet box"](https://github.com/alynnlp/tweeter/docs/toggleBox.png)

When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)
["Character Counter"](https://github.com/alynnlp/tweeter/docs/characterCount.png)
Compose Tweet

When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)
["auto-focused text area"](https://github.com/alynnlp/tweeter/docs/composeBox.png)

# Display (front-end)
Navigation Bar:

is fixed to the top
has padding on both sides
contains Compose button
Compose Tweet box:

is displayed above the list of tweets
contains a form for submitting tweets, which itself contains:
a textarea for new tweet content
a left-aligned button for submitting new tweets
contains a Character Counter, right-aligned, which by default shows 140
List of Tweets:

displays tweets in reverse-chronological order (that is, by creation time descending)
Individual Tweets:

have a header, which contains the user's:
avatar, on the left
name, on the left and after the avatar
handle, on the right
have a body, which contains the tweet text
have a footer, which displays:
how long ago the tweet was created, on the left
["how long ago the tweet was created"](https://github.com/alynnlp/tweeter/docs/dayscountAndHover.png)
"Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right
