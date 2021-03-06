function draw() {
  var ctx = document.getElementById("mycanvas").getContext("2d");
  //styles
  ctx.lineWidth = 10;
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "cyan";
  //a greenline
  //ctx.moveTo(0, 0);
  //ctx.lineTo(200, 100);
  //ctx.stroke();
  //a yellow circle with a green outline
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 100, 90, 0, 2 * Math.PI);
  //ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //a red rectangle
  ctx.fillStyle = "cyan";
  //ctx.fillRect(55, 130, 90, 40);
  //ctx.strokeRect(55, 130, 90, 40);

  //a red semi circle
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,45,56,0.9)";
  ctx.arc(60, 75, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(145, 75, 20, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(100, 135, 20, 0, 1 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "blue";
  // ctx.ellipse(100, 100, 50, 75, 0, 0, 2* Math.PI);
  ctx.stroke();
  ctx.fill();

  //a greenline
  ctx.lineWidth = 5;
  ctx.moveTo(90, 90);
  ctx.lineTo(100, 120);
  ctx.lineTo(110, 90);

  ctx.stroke();
}

function drawbasic() {
  var ctx = document.getElementById("gridcanvas").getContext("2d");
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      ctx.fillStyle = "rgb(255,123,66)";
      ctx.fillRect(i * 50, j * 50, 30, 30);
    } //end j for loop
  } //end i for loop
}
//drawbasic()

function drawLines() {
  var ctx = document.getElementById("mycanvas2").getContext("2d");
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      ctx.fillStyle = "rgb(255," + i * 25 + "," + j * 25 + ")";
      ctx.fillRect(i * 40, j * 45, 15, 20);
    } //end j for loop
  } //end i for loop
  ctx.beginPath();
  ctx.strokeStyle = "cyan";
  for (var i = 0; i < 41; i++) {
    ctx.moveTo(i * 10, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }
  for (var i = 0; i < 41; i++) {
    ctx.moveTo(i * 10, 400);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }
}
drawLines();

var radius = 10;
function drawRandom() {
  var ctx = document.getElementById("mycanvas3").getContext("2d");
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var radius = Math.floor(Math.random() * 100);
  var x = Math.floor(Math.random() * 400);
  var y = Math.floor(Math.random() * 400);
  ctx.beginPath();
  ctx.fillStyle = "rgba(" + red + "," + blue + "," + green + ",0.8)";
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}
//drawRandom()
setInterval(drawRandom, 100); //this runs the animation every 100 milliseconds



//LESSON 4 - responding to keyboard events

//listen out for key press and run keyPress function
addEventListener("keydown", e => keyPress(e.keyCode));
//start of keyPress function
function keyPress(code) {
  console.log("key pressed = " + code);
  console.log(circleX+" "+circleY)
  if (code == 65) {
    console.log("You pressed A");
    circleX = circleX - 10;
  }
  if (code == 68) {
    console.log("You pressed D");
    circleX = circleX + 10;
  }
  if (code == 87) {
    console.log("You pressed W");
    circleY = circleY - 10;
  }
  if (code == 83) {
    console.log("You pressed S");
    circleY = circleY + 10;
  }
}
function generateFruitCoords(){
  randomFruitX = Math.floor(Math.random()*400)
  randomFruitY = Math.floor(Math.random()*400)  
  console.log(randomFruitX);
  console.log(randomFruitY);
}

//set up variables to control the circle
var circleX = 200;
var circleY = 200;
var radius = 10;
var randomFruitX = 0
var randomFruitY = 0
generateFruitCoords()
//the main game loop
function gameLoop() {
  var ctx = document.getElementById("mycanvas4").getContext("2d");
  //check if x y is at a position
  
  if(circleX >= randomFruitX-10 && circleX <= randomFruitX+10 && circleY >= randomFruitY-10 && circleY <= randomFruitY){
    console.log("You found secret spot")
    generateFruitCoords()
  }
  //fill in background
  ctx.fillStyle = "rgba(255,255,255,0.1)";
  ctx.fillRect(0, 0, 400, 400);
  //draw orange circle
  ctx.fillStyle = "magenta";
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
  ctx.fill();
 // generateFruitCoords()
  //drawFruit
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(randomFruitX, randomFruitY, 10, 0, 2 * Math.PI);
  ctx.fill();
  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
