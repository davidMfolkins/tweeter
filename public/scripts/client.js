/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  $("#new-tweet").click(function(){
    console.log("working")
    $('#tweet-text').focus();
});

//Shows errors if condtions are met, otherwise it will accept user input and display a new tweet 
  $(function() {
    const $form = $("form")
    $form.on("submit", function (event) {
      event.preventDefault()
      const serialized = $(this).serialize()
      let content = $(this).children("textarea").val()

      if (content === "") {
        showError("Please input a tweet")


      } else if (content.length > 140) {
        showError("Your tweet is over 140 characters long")

      } else {
        $.ajax("/tweets", {method : "POST", data: serialized})
        .then(function() {
          $("#error").empty()
          $("#error").removeClass("warning")
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