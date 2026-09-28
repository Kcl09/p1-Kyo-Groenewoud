function setup() {
  createCanvas(400, 400);


  //  starter voorwaarden  updater
  for(let i = 0; i <= 100; i++){
    console.log(i)
  }


}


function draw() {
  background(220);

  for(let x = 0; x <= 2; x++){

    circle(30,30 + (35 * x),30)
    
    if( x == 0){
      fill("red")
    }else if(x == 1){
      fill("orange")
    }else if(x == 2) {
      fill("green")
    }
  
  
  }
  
let index = 0;
while (index < 5){
  rect(50 + (index * 50),50,50,50);
  index++
}

}