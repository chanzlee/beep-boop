$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#numberInput").val());
    var result = beepBoop(userInput);
    $("#result").text(result);

  });
});

// back-end logic
