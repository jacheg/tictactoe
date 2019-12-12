var counter = 0;
var gameOver = false;

function performLogic(button, tile){
  counter++;
  if(gameOver == false){
    if((counter % 2) == 0){
      $(tile).text("x");
      if(tile1 == tile2){
        $("body").css("background-color", "yellow");
      }
    } else{
      $(tile).text("o");
    }
  }

  if(counter == 9){
    $("h1").html("It's a draw!");
    $("body").css("background-color", "yellow");
    gameOver = true;
  }
}

function check3(tile1, tile2, tile3){
  if((tile1 == tile2) && (tile2 == tile3)){
    return true;
  }
  return false;
}

function checkVerticalWin(){
  if(check3(tile1, tile4, tile7)){
    return true;
    gameOver = true;
    $("h1").html("x wins!!");
  } else if(check3(tile2, tile5, tile8)){
    return true;
  } else if(check3(tile3, tile6, tile9)){
    return true;
  }
  return false;
}

function checkHorizontalWin(){
  if(check3(tile1, tile2, tile3)){
    return true;
  } else if(check3(tile4, tile5, tile6)){
    return true;
  } else if(check3(tile7, tile8, tile9)){
    return true;
  }
}

function checkDiagonalWin(){
  if(check3(tile1, tile5, tile9)){
    return true;
  } else if(check3(tile7, tile5, tile3)){
    return true;
  } 
return false;
}

// function checkAllWin(){
//   if(checkVerticalWin() || checkHorizontalWin() || checkDiagonalWin){
//     gameOver = true;
//     $("h1").html("x wins!!");
//   }
// }


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

