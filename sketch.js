let disappearingRects = []

let spaceBackground

function preload() {
  spaceBackground = loadImage(
    "https://images.unsplash.com/photo-1537147347432-676815edd56c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3027&q=80"
  )
}

function setup() {
  createCanvas(800, 600)
  noStroke()
}

let frame = 0;
function draw() {
  background(spaceBackground)

  let hourIndex = 24
  for (let i = 4; i > 0; i--) {
    for (let j = 6; j > 0; j--) {
      if (hourIndex > hour()) {
        fill("yellow")
        disappearingRects.push({ x: j * 10, y: (4 - i) * 10 + 10 })
      } else {
        noFill()
      }
      rect(j * 10, (4 - i) * 10 + 10, 8, 8)
      hourIndex--
    }
  }

  let minuteIndex = 60
  for (let i = 10; i > 0; i--) {
    for (let j = 6; j > 0; j--) {
      if (minuteIndex > minute()) {
        fill("red")
      } else {
        noFill()
      }
      rect(j * 10, (10 - i) * 10 + 50, 8, 8)
      minuteIndex--
    }
  }

  let secondIndex = 60;
  let visibleSecondSquare = (second() % 10) + 1;
  for (var i = 10; i > 0; i--) {
    for (let j = 6; j > 0; j--) {
      if (secondIndex > second()) {
        fill('blue');
        disappearingRects.push({x: j * (10), y: (10-i) * (10) + 150});
      } else {
        noFill();
      }
      rect(j * (10), (10-i) * (10) + 150, 8, 8);
      secondIndex--;
    }
  }
  let visibleSquare = (second() % 6) + 1;
  for (let i = 1; i <= 6; i++) {
    if (i === visibleSquare) {
      fill('blue');} else {
      noFill();
    }
    rect(i * (10), height - 15, 8, 8);
  }
  
   let targetX = (visibleSquare * (10)) + 4;
  // let targetY = (10-((second() % 10) + 1)) * (10) ;
  let targetY = 150 
  
  stroke('blue');

    line(targetX, height-10, targetX, targetY);
  noStroke();
  
}
