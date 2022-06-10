//Business Logic//

function forLoop(number){

let initialResult = [];

  for (let index = 0; index <= parseInt(number); index += 1) {
    initialResult.push(index);
  }
  return (initialResult + " ");
}

let text = initialResult;
let finalResult = text.replace(1, "Beep!");









  








  // if (noInput(number)) {
  //   return 0;
  // }
  // if (notNumber(number)) {
  //   return "Not a number!";
  // }
  // if (number1 < 0) {
  //   return "Please use positive numbers!";
  // }

//UI Logic//

$(document).ready(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();
    const number = $("#number").val ();
    const result = forLoop(number);
    $("#output").html(initialResult);
    $("#output").html(finalResult);
  });
});

