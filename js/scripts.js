//Business Logic//

function forLoop(number){

let result = [];

  for (let index = 0; index <= parseInt(number); index += 1) {
    result.push(index);
  }
  if ((result).includes("1")){
      return "Beep!";
    }
  return (result + " ");
}









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
    $("#output").html(result);
  });
});

