function sumLargestNumbers(data) {
  let number1 = []
  let remainingNumbers = []
  let number2 = []
  let total
  for (numbers of data) {
    if (numbers === Math.max(...data)) {
      number1.push(numbers)
    } else {
      remainingNumbers.push(numbers)
    }    
  }
  number2.push(Math.max(...remainingNumbers))
  total = number1[0] + number2[0]  
  return total
}
  
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));