var counter = 0;
var gameOver = false;

function performLogic(button, tile){
  counter++;

  if((counter % 2) == 0){
    $(tile).html("x");
  } else{
    $(tile).html("o");
  }

  if(counter == 9){
    $("h1").html("It's a draw!");
    $("body").css("background-color", "yellow");
    gameOver = true;
  }
}



$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

