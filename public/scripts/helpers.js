// Helps escape possible XSS attepmts
const escape = (str) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Creates tweets out of objects and displays them as HTML
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
      <p>${escape(tweet.content.text)}</p>
    </div>
    <footer>
      <div>
        <p>${moment(tweet.created_at).fromNow()}</p>
        <p class="icons">
          <i class="fas fa-flag"></i> 
          <i class="fas fa-retweet"></i> 
          <i class="fas fa-heart"></i>
        </p>
      </div>
    </footer>
  </article>
  `);
  return $tweet;
};

//Takes the HTML from createTweetElement function and prepends them to the list of tweets
const renderTweets = function(tweets) {
  for (const item of tweets) {
    const result = createTweetElement(item);
    $(".tweets").prepend(result);
  }
};

// Gets the list of tweets and renders them on the page
const loadTweets = function() {
  $.ajax("/tweets", {method: "GET"})
    .then((res) => {
      $(".tweets").empty();
      renderTweets(res);
    });
};

//Helper function just to contain repetition of errors
const showError = function(message) {
  if (!$("#error").hasClass("warning")) {
    $("#error").empty();
    $("#error").addClass("warning");
    $("#error").append(message).hide().slideDown(500);
  } else {
    $("#error").empty();
    $("#error").append(message)
  }
};

//Button that appears after scrolling, and brings user back to the top of the page when clicked
const scrollButton = function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $("#button").addClass("display");
    } else {
      $("#button").removeClass("display");
    }
  });
    
  $("#button").on('click', function() {
    $("html, body").animate({scrollTop:0}, "400");
  });
};
