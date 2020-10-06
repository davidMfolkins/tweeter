$(document).ready(function() {
  maxKeyCount=140;

  $("#tweet-text").on("keyup",function(){
    let length = $(this).val().length;
    let curentLength = maxKeyCount-length;
    $("#counter").text(curentLength) 
    if (curentLength < 1) {
      $("#counter").css("color", "red")
    } else {
      $("#counter").css("color", "#545149")
    }
  })
});