function repeatNumbers(data) {
  let numbers = ""
  let output = []    
  for (let array = 0; array < data.length; array++) {  
    for (let i = 0; i < data[array][1]; i++) {
      numbers = numbers + data[array][0]      
    }
    output.push(numbers)
    numbers = ""
  }  
  return output.join(", ")
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));