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
  var result = [];

  for (var number = 0; number <= numberInput; number++) {
    strNum = number.toString();
    alert(strNum);
    isSpecial = false;

    for ( i = 0; i < strNum.length; i++) {
        var  checkNum= strNum.charAt(i);
        if (checkNum == '0' || checkNum == '1' || checkNum == '3') {
            isSpecial = true;
        }
    }

    if (isSpecial) {
      result += "special"
    } else {
      result += strNum
    }

  }
  return result;
};
