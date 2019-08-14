let img;
let img2;
function preload() {
  img = loadImage('assets/what_are_we.png');
  img2 = loadImage('assets/worthwhile.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  imageMode(CENTER);
}

function draw() {
  background(255);

  if(mouseIsPressed) {
    image(img2, mouseX, mouseY);
  } else {
    image(img, mouseX, mouseY);
  }

  for (var x = 0; x <= width; x += 51) {
    for (var y = 0; y <= height; y += 51) {
      let newX = random(255);
      fill(newX, newX, newX, 200);
      noStroke();
      rect(x, y, 51, 51);
    }
  };
}
