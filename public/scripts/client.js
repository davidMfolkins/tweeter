/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

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
      $(".tweets").prepend(result)
    }
  }

  const loadTweets = function() {
    $.ajax("/tweets", {method: "GET"})
    .then((res) => {
    $(".tweets").empty()
    renderTweets(res)
    })
  }

  $(function() {
    const $form = $("form")
    $form.on("submit", function (event) {
      event.preventDefault()
      const serialized = $(this).serialize()
      let content = $(this).children("textarea").val()

      if (content === "") {
        alert("Please input a tweet")

      } else if (content.length > 140) {
        alert("Your tweet is over 140 characters long")

      } else {
        $.ajax("/tweets", {method : "POST", data: serialized})
        .then(function() {
          $("#counter").text("140") 
          $("#form")[0].reset()
          loadTweets()
        })
        .catch(err => console.log("error", err))
      }
    })
  })

  //relevant comment
  loadTweets()
});