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

let frame = 0
function draw() {
  translate(330, 0)
  background(spaceBackground)

  let hourIndex = 24
  for (let i = 2; i > 0; i--) {
    for (let j = 12; j > 0; j--) {
      if (hourIndex > hour()) {
        fill("yellow")
      } else {
        noFill()
      }
      rect(j * 10, (2 - i) * 10 + 80, 8, 8)
      hourIndex--
    }
  }

  let minuteIndex = 60
  for (let i = 5; i > 0; i--) {
    for (let j = 12; j > 0; j--) {
      if (minuteIndex > minute()) {
        fill("red")
      } else {
        noFill()
      }
      rect(j * 10, (5 - i) * 10 + 100, 8, 8)
      minuteIndex--
    }
  }
  console.log(minute())

  let secondIndex = 60
  for (let i = 5; i > 0; i--) {
    for (let j = 12; j > 0; j--) {
      if (secondIndex > second()) {
        fill("blue")
      } else {
        noFill()
      }
      rect(j * 10, (5 - i) * 10 + 150, 8, 8)
      secondIndex--
    }
  }
  let shooter = (second() % 12) + 1
  for (let i = 1; i <= 12; i++) {
    if (i === shooter) {
      fill("white")
    } else {
      noFill()
    }
    rect(i * 10, height - 100, 8, 8)
    triangle(
      i * 10,
      height - 100,
      i * 10 + 8,
      height - 100,
      i * 10 + 4,
      height - 100 - 8 / 2
    )
  }

  let targetX = shooter * 10 + 4
  let targetY = 210 - second()

  let startX = shooter * 10 + 4
  let startY = height - 100
  let endX = targetX
  let endY = targetY

  let currentX = lerp(startX, endX, frame / 53)
  let currentY = lerp(startY, endY, frame / 53)
  let newEndX = lerp(startX, endX, frame / 55)
  let newEndY = lerp(startY, endY, frame / 55)

  stroke("white")
  line(currentX, currentY, newEndX, newEndY)
  noStroke()

  if (currentX !== endX || currentY !== endY) {
    frame++
  } else {
    frame = 0
  }
}
