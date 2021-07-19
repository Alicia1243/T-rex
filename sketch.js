
function setup() {
  createCanvas(400,400);
  var red_btn = createSprite;
  red_btn.text(25);
    if (red_btn.mousePressed){
    background.shapeColour = "Red";
  }
  var green_btn = createSprite;
  green_btn.text(50);
  if (green_btn.mousePressed){
    background.shapeColour = "Green";
  }
}

function draw() 
{
  background(300);

}




