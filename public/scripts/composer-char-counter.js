$(document).ready(function() {
  maxKeyCount=140;

  $("#tweet-text").on("keyup",function(){
    let length = $(this).val().length;
    let currentLength = maxKeyCount-length;
    $("#counter").text(currentLength) 
    if (currentLength < 0) {
      $("#counter").addClass("red")
    } else {
      $("#counter").removeClass("red")
    }
  })
});