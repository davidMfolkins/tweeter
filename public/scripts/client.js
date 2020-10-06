/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
      "name": "Dave",
      "handle": "@LHdave",
      "avatars": "https://i.imgur.com/DVpDmdR.png"
      },
      "content": {
      "text": "Man, my app is really coming along"
      },
      "created_at": 1602022691551
      }
  ]

  const createTweetElement = function(tweet) {
    let $tweet = $(`
    <article>
    <header>
      <div>
        <p>
          <img src="${tweet.user.avatars}">
          <span>${tweet.user.name}</span>
        </p> 
        <span class="reveal">${tweet.user.handle}</span> 
      </div>
    </header>
    <div class="user-tweet">
      <p>${tweet.content.text}</p>
    </div>
    <footer>
      <div>
        <p>${new Date(tweet.created_at).toLocaleString()}</p>
        <p class="icons">
          <i class="fas fa-flag"></i> 
          <i class="fas fa-retweet"></i> 
          <i class="fas fa-heart"></i>
        </p>
      </div>
    </footer>
  </article>
  `)
  return $tweet
  } 

  const renderTweets = function(tweets) {
    for (const item of tweets) {
      const result = createTweetElement(item)
      $(".tweets").append(result)
    }
  }

  renderTweets(data)
});