let nummer = 1;

function addition(a, b) {
  return a + b;
}
let totaal = addition(3, 1);

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  if (nummer == 1) {
    text(totaal, 10, 10)
  }
}
