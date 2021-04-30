//The setup function only happens once
var Jelly = 200;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas 
}

//The draw function happens over and over again
function draw() {
  background(2,2,2); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(27, 13, 248 ,100); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  strokeWeight(5);
  ellipse(mouseX,mouseY,Jelly,Jelly); // center of canvas, 20px dia
  Jelly=Jelly;
   stroke(250,250,250);
  fill(33,74,241);
  textSize(25);
  textFont('Helvetica');
  text('Compress... and Release!',10,50);}

  function mousePressed() {Jelly=Jelly-50;}
  if (Jelly<=0) {Jelly=Jelly+100;}
		  	else {Jelly=Jelly-50;}

    


