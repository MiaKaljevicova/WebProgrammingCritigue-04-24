//The setup function only happens once
var diam1=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255,153,153); //an RGB color for the canvas' background
  //circle
  stroke(204,255,102) // an RGB color for the circle's border
  strokeWeight(5); // thickness of the stroke, numerical value
  fill(255,255,179,200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(50,100,diam1,diam1); // center of canvas, 20px dia
  
  textSize(20);
  textFont("Times New Roman");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Keep clicking until the pink background disappears")

  stroke(255,255,179);
  strokeWeight(6);
  fill(204,255,102,200);
  ellipse(200,200,diam1,diam1);

  stroke(204,255,102);
  strokeWeight(7);
  fill(255,255,179,200);
  ellipse(100,50,diam1,diam1);

  stroke(255,255,179);
  strokeWeight(7);
  fill(204,255,102,200);
  ellipse(150,200,diam1,diam1);
  
}
function mousePressed(){
	diam1=diam1+5;
}



