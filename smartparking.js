function whereCanIPark(spots, vehicle) {
  let firstAvailableSpot = []
  let spot = []
  for (let row = 0; row < spots.length; row++) {
    for (let column = 0; column < spots[row].length; column++) {
      if (vehicle === "regular" && spots[row][column] === "R") {
          spot.push(column, row)
      } else if (vehicle === "motorcycle" && (spots[row][column] === "M" || spots[row][column] === "S" || spots[row][column] === "R")) {
          spot.push(column, row)
      } else if (vehicle === "small" && (spots[row][column] === "S" || spots[row][column] === "R")) {
          spot.push(column, row)
      }     
    }      
  }  
  firstAvailableSpot.push(spot[0], spot[1])
  if (firstAvailableSpot[0] >= 0 && firstAvailableSpot[1] >= 0) {
    return firstAvailableSpot
  } else {
    return "false"
  }
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
