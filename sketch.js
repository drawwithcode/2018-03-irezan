function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSL);
  noStroke();
}

function draw() {
  background(0, 0, 15);

  //COLOR
  var colorHp = 225;
  var colorH = colorHp + random()*50;

  var colorSp = 80;
  var colorS = colorSp + random()*50;

  fill(colorH, colorS, 80);

  //SHAPES

  var OFF1 = 100;
  var OFF2 = OFF1*2;
  var OFF3 = OFF1*3;

  for(var x = 0; x < ((width/100)*100)+500; x+=OFF1) {
    for(var y = 0; y < ((height/100)*100)+500; y+=OFF1){

      var d0 = 25;
      var d1 = 25;
      var d2 = 25;
      var d3 = 25;

      if(mouseX > x - 80 && mouseX < x + 20 && mouseY > y - 80 && mouseY < y + 20){
        d0 = d0*3.3;
        d1 = d1*2.2;
        d2 = d2*1.7;
        d3 = d3*1.3;
      }

      //Main
      rect(x, y, d0, d0);

      //First frame
      rect(x+OFF1, y+OFF1, d1, d1);
      rect(x+OFF1, y-OFF1, d1, d1);
      rect(x-OFF1, y-OFF1, d1, d1);
      rect(x-OFF1, y+OFF1, d1, d1);

      rect(x+OFF1, y, d1, d1);
      rect(x-OFF1, y, d1, d1);
      rect(x, y+OFF1, d1, d1);
      rect(x, y-OFF1, d1, d1);

      //Second frame
      rect(x+OFF2, y+OFF2, d2, d2);
      rect(x+OFF2, y-OFF2, d2, d2);
      rect(x-OFF2, y-OFF2, d2, d2);
      rect(x-OFF2, y+OFF2, d2, d2);

      rect(x+OFF2, y, d2, d2);
      rect(x-OFF2, y, d2, d2);
      rect(x, y+OFF2, d2, d2);
      rect(x, y-OFF2, d2, d2);

      rect(x+OFF1, y+OFF2, d2, d2);
      rect(x+OFF1, y-OFF2, d2, d2);
      rect(x-OFF2, y-OFF1, d2, d2);
      rect(x-OFF2, y+OFF1, d2, d2);

      rect(x+OFF2, y-OFF1, d2, d2);
      rect(x+OFF2, y+OFF1, d2, d2);
      rect(x-OFF1, y+OFF2, d2, d2);
      rect(x-OFF1, y-OFF2, d2, d2);

      //Third frame
      rect(x-OFF2, y-OFF3, d3, d3);
      rect(x, y-OFF3, d3, d3);
      rect(x+OFF2, y-OFF3, d3, d3);

      rect(x-OFF3, y-OFF2, d3, d3);
      rect(x+OFF3, y-OFF2, d3, d3);

      rect(x-OFF3, y, d3, d3);
      rect(x+OFF3, y, d3, d3);

      rect(x-OFF3, y+OFF2, d3, d3);
      rect(x+OFF3, y+OFF2, d3, d3);

      rect(x-OFF2, y+OFF3, d3, d3);
      rect(x, y+OFF3, d3, d3);
      rect(x+OFF2, y+OFF3, d3, d3);
    }
  }
}
