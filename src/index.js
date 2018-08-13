;(async () => {
  const todos = await (await fetch(
    `https://sparkling-draw.glitch.me/todos`
  )).json()

  console.log(todos)
})()
