document.body.style.margin = 0

let canvas = document.createElement("canvas")
document.body.appendChild(canvas)

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

let context = canvas.getContext("2d")
context.lineWidth = 10
context.lineCap = "round"

let isMouseDown = false
let previous = { x: 0, y: 0 }

canvas.addEventListener("mousemove", event => {
  if (isMouseDown) {
    let { pageX: x, pageY: y } = event
    context.beginPath()
    context.moveTo(previous.x, previous.y)
    context.lineTo(x, y)
    context.stroke()

    previous = { x, y }
  }
})

canvas.addEventListener("mousedown", event => {
  let { pageX: x, pageY: y } = event
  previous = { x, y }

  isMouseDown = true
})

canvas.addEventListener("mouseup", event => {
  isMouseDown = false
})
