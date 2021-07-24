var golf = {
  x: 23,
  y: 54,
  r: 20,
  color : ["red", "blue", "green"] ,
  xspeed: 0,
  yspeed: 0,
}
function setup() { 
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(golf.color[2])
  circle(golf.x,golf.y,golf.r)
  golf.xspeed = 1
  golf.x = golf.x + golf.xspeed 
}