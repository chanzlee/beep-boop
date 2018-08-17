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
    isZero = false;
    isOne = false;
    isThree = false;

    for ( i = 0; i < strNum.length; i++) {
      var  checkNum= strNum.charAt(i);

      if (checkNum == '0') {
        isZero = true;
      } else if ( checkNum == '1') {
        isOne = true;
      } else if ( checkNum == '3') {
        isThree = true;
      }
    }

    if (isThree) {
      result += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (isOne) {
      result += "Boop!";
    } else if (isZero) {
      result += "Beep!";
    } else {
      result += strNum;
    }
  }
  return result;
};
