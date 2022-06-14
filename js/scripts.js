//Business Logic//

function output(number) {
  let resultArray = [];
  for (let index = 0; index <= parseInt(number); index += 1) {

    if ([index].includes(1)) {
      resultArray.push(" " + "Beep!");
    }
    if ([index].includes(2)) {
      resultArray.push(" " + "Boop!");
    }
    if ([index].includes(3)) {
      resultArray.push(" " + "Won't you be my neighbor?");
    }
    else {resultArray.push(" " + index);
    }
  }
  return (resultArray + "");
}

  

//UI Logic//

$(document).ready(function(){
  $("form#counter").submit(function(event){
    event.preventDefault();
    const number = $("#number").val ();
    const result = output(number);
    $("#output").html(result);
  });
});
