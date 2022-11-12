function camelCase(input) {
  let spaces = []
  let message = []
  for (let i = 0; i < input.length; i++) {
    message.push(input[i])
    if (input[i] === " ") {
      spaces.push(i)
    }
  }  
  for (let m of message) {
    for (let n of spaces) {
      if (m = n + 1) {
        message.splice(m, 1, message[m].toUpperCase())
      }
    }  
  }
  for (m = 0; m < message.length; m++) {
    if (message[m] === " ") {
      message.splice(m, 1)
    }
  } 
  return message.join("")
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
