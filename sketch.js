function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(255);
  for (var x = 0; x <= width; x += 51) {
    for (var y = 0; y <= height; y += 51) {
      let newX = random(255);
      fill(newX, newX, newX, 200);
      noStroke();
      rect(x, y, 51, 51);
    }
  };
}
