//Business Logic//

function output(number) {
  let resultArray = [];
  for (let index = 0; index <= parseInt(number); index += 1) {
   resultArray.push(index);
  }
    return (resultArray + " ");
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
    const result = output(number);
    $("#output").html(result);
  });
});

// function replace(resultArray) {
//   const modified = result.split(" ");
//   modified.forEach(function (result) {
//     if (result.includes(1)) {
//       modified.splice(index, 1, "Beep!");
//     }
//     index++;
//   });