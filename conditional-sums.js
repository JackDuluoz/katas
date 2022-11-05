function conditionalSum(values, condition) {
  let evens = []
  let odds = []
  for (let num of values) {
    if (num % 2 === 0) {
      evens.push(num)
    } else {
      odds.push(num)
    }
  }
  if (condition === "even") {
    let totalEvens = 0
    for (let e of evens) {
      totalEvens += e
    }    
     return totalEvens
  } else {
    let totalOdds = 0
    for (let o of odds) {
      totalOdds += o
    }
    return totalOdds
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
