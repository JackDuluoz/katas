function urlEncode(text) {
  let textArray = []
  for (let character of text) {
    textArray.push(character)
  }
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === " ") {
      textArray.splice(i, 1, "%20")
    }
  }
  if (textArray[0] === "%20") {
    textArray.splice(0, 1)
  }
  if (textArray.reverse()[0] === "%20") {
    textArray.splice(0, 1)
  }
  textArray = textArray.reverse()
  textArray = textArray.join("")
  return textArray  
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
