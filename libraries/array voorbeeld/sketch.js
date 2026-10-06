function setup() {
  createCanvas(400, 400);

}
let array = [
  ['naam1', 'naam 2', 'naam3', 'naam4', 'naam5'],
  ['naam6', 'naam 7', 'naam8', 'naam9', 'naam10'],
  ['naam11', 'naam 12', 'naam13', 'naam14', 'naam15'],
  ['naam16', 'naam 17', 'naam18', 'naam19', 'naam20'],
  ['naam21', 'naam 22', 'naam23', 'naam24', 'naam25'],
];

function draw() {
  background(220);
  let index = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (index % 2 == 0) {
        fill(255)
      } else {
        fill(0)
      }
      rect(j * 50 + 25, i * 50 + 25, 50)

      index++;
      fill(255, 0, 0);
      text(array[i][j], 50 * j + 25, 35 + 50 * i)
    }
  }
text(array[0][0],10,10)
}
