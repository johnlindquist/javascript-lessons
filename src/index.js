function* generateAlphabet() {
  let i = "a".charCodeAt(0)
  let end = "z".charCodeAt(0) + 1

  while (i < end) {
    yield String.fromCharCode(i)
    i++
  }
}

let alphabet = [...generateAlphabet()]
