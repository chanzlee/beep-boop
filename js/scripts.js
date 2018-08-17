// Front-end
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("input#numberInput").val();
    reversed = $("input:checkbox[name=order]:checked").length;

    //Check out the validity of input. If invalid, HAL says goodbye and hides. If valid, go on to back-end logic.

    var re = /^[0-9]+$/g

    if (!userInput.match(re)){
      $(".notification").addClass("hidden");

      alert("Dave...This conversation can serve no purpose anymore.");
      alert("Goodbye...");

    } else {
      $("*").delay(100).fadeOut().fadeIn('slow');
      $(".notification").removeClass("hidden");

      var result = beepBoop(userInput);
      $("#result").text(result);

    }
  });
});

// Back-end

function beepBoop (numberInput) {

    numberInput = parseInt(numberInput);
    var result = [];

    // Count up to the number that user returned while checking on each counted number for any conditions met.

    for (var count = 0; count <= numberInput; count++) {
      strNum = count.toString();
      isZero = false;
      isOne = false;
      isThree = false;

      // When certain conditions are met, return true for revelant boolean variable.

      if (count % 3 === 0){
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
