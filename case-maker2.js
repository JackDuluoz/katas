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

//console.log(camelCase("this is a string"));

function pascal(input) {
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
  message.splice(0,1, message[0].toUpperCase())
  return message.join("")
}

//console.log(pascal("this is a string"));

function snake(input) {
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
      if (m = n) {
        message.splice(m, 1, "_")
      }
    }
  }  
  return message.join("")
}

//console.log(snake("this is a string"));

function kebab(input) {
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
      if (m = n) {
        message.splice(m, 1, "-")
      }
    }
  }
  return message.join("")
}

//console.log(kebab("this is a string"));

function title(input) {
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
  message.splice(0, 1, message[0].toUpperCase())
  return message.join("")
}

//console.log(title("this is a string"));

function vowel(input) {
  let message = []
  for (let i = 0; i < input.length; i++) {
    message.push(input[i])
  }
  for (let m = 0; m < message.length;  m++) {
    if (message[m] === "a" || message[m] === "e" || message[m] === "i" || message[m] === "o" || message[m] === "u") {
      message.splice(m, 1, message[m].toUpperCase())
    }    
  }
  return message.join("")
}

//console.log(vowel("this is a string"));

function consonant(input) {
  let message = []
  for (let i = 0; i < input.length; i++) {
    message.push(input[i])
  }
  for (let m = 0; m < message.length; m++) {
    if (message[m] === "b" || message[m] === "c" || message[m] === "d" || message[m] === "f" || message[m] === "g" || message[m] === "h" ||
      message[m] === "j" || message[m] === "k" || message[m] === "l" || message[m] === "m" || message[m] === "n" ||
      message[m] === "p" || message[m] === "q" || message[m] === "r" || message[m] === "s" || message[m] === "t" ||
      message[m] === "v" || message[m] === "w" || message[m] === "x" || message[m] === "y" || message[m] === "z") {
      message.splice(m, 1, message[m].toUpperCase())
    }
  }
  return message.join("")
}

//console.log(consonant("this is a string"));

function makeCase(input, style) {
  let styles = []
  if (style === "camel") {
    styles.push("camel")
  } else if (style === "pascal") {
    styles.push("pascal")
  } else if (style === "snake") {
    styles.push("snake")
  } else if (style === "kebab") {
    styles.push("kebab")
  } else if (style === "title") {
    styles.push("title")
  } else if (style === "vowel") {
    styles.push("vowel")
  } else if (style === "consonant") {
    styles.push("consonant")
  } else if (style === "upper") {
    styles.push("upper")
  } else if (style === "lower") {
    styles.push("lower")
  } else {
    styles = Array.from(style)    
  }  
  let message = input
  let output = []
  for (let s = 0; s < styles.length; s++) {
    if (styles[s] === "camel") {
      message = camelCase(message)
    } else if (styles[s] === "pascal") {
      message = pascal(message)
    } else if (styles[s] === "snake") {
      message = snake(message)
    } else if (styles[s] === "kebab") {
      message = kebab(message)     
    } else if (styles[s] === "title") {
      message = title(message)
    } else if (styles[s] === "vowel") {
      message = vowel(message)      
    } else if (styles[s] === "consonant") {
      message = consonant(message)
    } else if (styles[s] === "upper") {
      message = message.toUpperCase()
    } else if (styles[s] === "lower") {
      message = message.toLowerCase()
    }
    output.splice(0, 1, message)
    message = output.toString() 
  }
  return output.toString()
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));