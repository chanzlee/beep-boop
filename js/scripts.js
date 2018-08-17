$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#numberInput").val());
    var result = beepBoop(userInput);
    $("#result").text(result);

  });
});

// back-end logic

function beepBoop (numberInput) {
  for (var number = 1; number <= numberInput; number++) {
    strNum = number.toString();
    alert(strNum);
    isSpecial = false;

  }
};
