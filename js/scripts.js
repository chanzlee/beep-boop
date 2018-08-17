// Front-end
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#numberInput").val());
    reversed = $("input:checkbox[name=order]:checked").length;
    var result = beepBoop(userInput);
    $("#result").text(result);

  });
});

// Back-end

function beepBoop (numberInput) {
  var result = [];

  for (var number = 0; number <= numberInput; number++) {
    strNum = number.toString();
    isZero = false;
    isOne = false;
    isThree = false;

    // check all numbers to find whether it inclues 0, 1, number divisible by 3. When it finds, return true for revelant boolean variable.

    if (number % 3 === 0){
      isThree = true;
    }

    for ( i = 0; i < strNum.length; i++) {
      var checkNum = strNum.charAt(i);
        if ( checkNum === "1") {
        isOne = true;
        } else if (checkNum === "0") {
        isZero = true;
        }
    }

    // push results for each condition met, filtering from the higher priority condition.

    if (isThree) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (isOne) {
      result.push("Boop!");
    } else if (isZero) {
      result.push("Beep!");
    } else {
      result.push(strNum);
    }
  }

  // In the if condition below, "reversed" will result 1 or true if checkbox was checked, otherwise result 0 or false.

  if (reversed) {
    result = result.reverse().join(" ")
  } else {
    result =  result.join(" ")
  }
  return result;
};
