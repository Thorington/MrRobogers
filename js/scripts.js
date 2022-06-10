//Business Logic//

function output(number) {
  let result = [];
  for (let index = 0; index <= parseInt(number); index += 1) {
    function replace(result) {
      const newResult = result.split(" ");
      let i = 0;
      newResult.forEach(function (element) {
        if (element.includes("1")) {
          newResult.splice(index, 1, "Beep!");
        }
        index++;
      });
      return newResult;
    }
    result.push(newResult);


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
    const result = output(number);
    $("#output").html(result);
  });
});

