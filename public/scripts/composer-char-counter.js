$(document).ready(function() {
  maxKeyCount=140;

  $("#tweet-text").on("keyup",function(){
    let length = $(this).val().length;
    let curentLength = maxKeyCount-length;
    $("#counter").text(curentLength) 
  });
})