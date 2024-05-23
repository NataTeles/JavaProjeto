function setup() {
  createCanvas(800, 500);
  background("violet");
}

function draw() {
  stroke("purple");
  fill("lightblue");
  if(mouseIsPressed){
    rect(mouseX,mouseY, 30, 50);
  }
}
