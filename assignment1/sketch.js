let startFrame;
let r, g, b;
let diam = 10;
let maxDiam = 150;
let circleX = 150;

function setup() {
  createCanvas(420, 280);
  r = random(255);
  g = random(255);
  b = random(255);
  startFrame = frameCount;  // 타이머 시작
  prevSec = second();
}

function draw() {
    background(230, 230, 250);  // 배경을 연보라로 변경
   

  // 사각형 = rect(X좌표, Y좌표, 가로, 세로);
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(30, 40, 202, 220);

  stroke(19, 96, 147);
  strokeWeight(3);
  fill(195, 226, 246);
  rect(110, 90, 170, 110);

  // 원 = ellipse(X좌표, Y좌표, 가로 지름, 세로지름)
  stroke(129, 24, 179);//보라
  fill(188, 152, 242);
  ellipse(120, 150, 150, 150);

  // 파랑 원
  stroke(24, 24, 179);
  fill(152, 164, 242);
  ellipse(180, 150, 75, 75);

  // 삼각형 = triangle(꼭짓점 좌표);
  strokeWeight(3);
  stroke(179, 24, 113);
  fill(246, 176, 234);
  triangle(400, 180, 280, 70, 390, 30);
  
  stroke(35, 0, 157);
  strokeWeight(7);
  noFill();
  triangle(280, 240, 320, 150, 400, 260);
}

// s 누르면 10초간 저장
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}
