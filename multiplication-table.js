function multiplicationTable(maxValue) {
  let timesTables = []
  let numbers = ""
  let output = []
  for (i = 1; i <= maxValue; i++) {
    timesTables.push(i)
  }
  for (let t = 0; t < timesTables.length; t++) {
    for (k = 0; k < maxValue; k++) {
      numbers = numbers + " " + (timesTables[t] * (k + 1))      
    }
      output.push(numbers)
      numbers = ""          
  }
  return output.join("\n")
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));