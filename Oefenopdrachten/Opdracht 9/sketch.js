let alles = {
  x: [],
  y: [],
  size: [],
  xSpeed: [],
  ySpeed: [],
  r: [],
  g: [],
  b: [],
};

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    alles.x.push(int(random(0, 400)))
    alles.y.push(int(random(0, 400)))
    alles.size.push(int(random(10, 50)))
    alles.xSpeed.push(int(random(-5, 5)))
    alles.ySpeed.push(int(random(-5, 5)))
    alles.r.push(int(random(0, 255)))
    alles.g.push(int(random(0, 255)))
    alles.b.push(int(random(0, 255)))
  }
}

function draw() {
  background(220);
  for (let i = 0; i < 200; i++) {

    alles.x[i] = alles.x[i] + alles.xSpeed[i]
    alles.y[i] = alles.y[i] + alles.ySpeed[i]
    fill(alles.r[i], alles.g[i], alles.b[i])
    circle(alles.x[i], alles.y[i], alles.size[i])

    if (alles.xSpeed[i] == 0) {
      alles.xSpeed[i] += random(-5, 5)
    }
    if (alles.ySpeed[i] == 0) {
      alles.ySpeed[i] += random(-5, 5)
    }
    if (alles.x[i] <= -50) {
      alles.x[i] += 450
    }
    if (alles.x[i] >= 450) {
      alles.x[i] -= 450
    }
    if (alles.y[i] <= -50) {
      alles.y[i] += 450
    }
    if (alles.y[i] >= 450) {
      alles.y[i] -= 450
    }
  }

  function mousePressed() {
    // for(let mijnBal )
  }
}
