//Business Logic//

function output(number) {
    let resultArray = [];
    for (let index = 0; index <= parseInt(number); index += 1) {
  
      if ([index].toString("").includes("3")) {
        resultArray.push(" " + "Won't you be my neighbor?");
      }
      else if ([index].toString("").includes("2")) {
        resultArray.push(" " + "Boop!");
      }
      else if ([index].toString("").includes("1")) {
        resultArray.push(" " + "Beep!");
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


