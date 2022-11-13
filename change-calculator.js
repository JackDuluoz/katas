
const denominations = [
  { name: "twentyDollar", value: 2000 },
  { name: "tenDollar", value: 1000 },
  { name: "fiveDollar", value: 500 },
  { name: "twoDollar", value: 200 },
  { name: "oneDollar", value: 100 },
  { name: "quarter", value: 25 },
  { name: "dime", value: 10 },
  { name: "nickel", value: 5 },
  { name: "penny", value: 1 }
]

function calculateChange(total, cash) {
  let output = { twentyDollar: 0, tenDollar: 0, twoDollar: 0, oneDollar: 0, quarter: 0, dime: 0, nickel: 0, penny: 0 }
  let change = []
  let totalChange = cash - total
  //console.log(totalChange)
  for (let d = 0; d < denominations.length; d++) {
    while (totalChange / denominations[d].value >= 1) {
      if (totalChange > 0) {
        change.push(denominations[d].name)
      }
      totalChange = totalChange - denominations[d].value
    }    
  }
  for (let c = 0; c < change.length; c++) {
    if (change[c] === "twentyDollar") {
      output.twentyDollar = output.twentyDollar + 1
    } else if (change[c] === "tenDollar") {
      output.tenDollar = output.tenDollar + 1
    } else if (change[c] === "twoDollar") {
      output.twoDollar = output.twoDollar + 1
    } else if (change[c] === "oneDollar") {
      output.oneDollar = output.oneDollar + 1
    } else if (change[c] === "quarter") {
      output.quarter = output.quarter + 1
    } else if (change[c] === "dime") {
      output.dime = output.dime + 1
    } else if (change[c] === "nickel") {
      output.nickel = output.nickel + 1
    } else if (change[c] === "penny") {
      output.penny = output.penny + 1
    }    
  }
    if (output.twentyDollar === 0) {
      delete output.twentyDollar
    }
    if ((output.tenDollar === 0)) {
      delete output.tenDollar
    }
    if ((output.twoDollar === 0)) {
      delete output.twoDollar
    }
    if ((output.oneDollar === 0)) {
      delete output.oneDollar
    }
    if ((output.quarter === 0)) {
      delete output.quarter
    }
    if ((output.dime === 0)) {
      delete output.dime
    }
    if ((output.nickel === 0)) {
      delete output.nickel
    }
    if ((output.penny === 0)) {
      delete output.penny
    }      
  return output
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));