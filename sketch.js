// 구름 위치 전역 변수
let cloudX, cloudY;
let cloudA, cloudB;

function setup() {
  createCanvas(400, 600);

  // 구름 초기 위치
  cloudX = 80;
  cloudY = 80;
  cloudA = 300;
  cloudB = 70;
}

function draw() {
  background(186, 221, 238); // 하늘색

  // 바닥
  noStroke();
  fill(50, 180, 60);
  rect(0, 450, 400, 150);

  // 꽃
  drawFlower(40, 500);
  drawFlower(60, 550);
  drawFlower(340, 550);
  drawFlower(360, 500);

  // 구름 (고정)
  drawCloud(cloudX, cloudY, 1);
  drawCloud(cloudA, cloudB, 1);

  // ================= 캐릭터 =================
  // 머리
  fill(100, 50, 0);
  rect(105, 160, 190, 200);

  fill(255, 220, 180);
  stroke(0);
  rect(180, 300, 40, 40); // 목

  // 얼굴
  fill(255, 220, 180);
  stroke(0);
  strokeWeight(3);
  ellipse(200, 220, 160, 200);

  // 머리 반원
  fill(100, 50, 0);
  arc(200, 190, 200, 240, PI, 0);

  // 눈썹
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(160, 165, 50, 20, PI, 0);
  arc(240, 165, 50, 20, PI, 0);

  // 코
  fill(233, 189, 106);
  noStroke();
  ellipse(200, 230, 15, 10);

  // 입
  fill(150, 0, 0);
  stroke(150, 0, 0);
  arc(200, 260, 80, 50, 0, PI);

  // 볼
  noStroke();
  fill(255, 150, 150, 180);
  ellipse(140, 240, 30, 20);
  ellipse(260, 240, 30, 20);

  // 몸통
  stroke(0);
  fill(220);
  arc(200, 530, 250, 400, PI, 0);

  // 목파임 덮기
  fill(255, 220, 180);
  triangle(180, 325, 200, 360, 220, 325);
  fill(255, 220, 180);
  noStroke();
  rect(180, 300, 40, 30, 10);

  // 로고
  fill(36, 40, 199);
  noStroke();
  ellipse(245, 400, 30, 30);
  fill(220);
  ellipse(245, 400, 25, 25);

  // ================= 정적 눈 =================
  // 눈동자 고정 위치
  stroke(0);
  strokeWeight(2);

  fill(0);
  ellipse(160, 200, 30, 30);
  ellipse(240, 200, 30, 30);

  // 하이라이트 (고정)
  fill(255);
  noStroke();
  ellipse(156, 196, 12, 12);
  ellipse(236, 196, 12, 12);
}

// ================= 전역 함수 =================

// 꽃 그리기
function drawFlower(x, y) {
  fill(255, 200, 200);
  ellipse(x - 8, y, 12, 12);
  ellipse(x + 8, y, 12, 12);
  ellipse(x, y - 8, 12, 12);
  ellipse(x, y + 8, 12, 12);
  fill(255, 230, 0);
  ellipse(x, y, 10, 10);
}

// 구름 그리기
function drawCloud(x, y, scale = 1) {
  noStroke();
  fill(255);
  ellipse(x, y, 60 * scale, 40 * scale);
  ellipse(x - 30 * scale, y + 10 * scale, 50 * scale, 30 * scale);
  ellipse(x + 30 * scale, y + 10 * scale, 50 * scale, 30 * scale);
  ellipse(x - 15 * scale, y - 15 * scale, 50 * scale, 35 * scale);
  ellipse(x + 15 * scale, y - 15 * scale, 50 * scale, 35 * scale);
}

// 움직임 기능 전체 제거됨
function keyPressed() {
  // 비워둠 (아무 기능 없음)
}
