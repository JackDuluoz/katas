const PI = 3.14159

function sphereVolume(radius) {
  let sphereV
  if (radius > 0) {
    sphereV = (4 / 3) * PI * Math.pow(radius, 3)
    return sphereV
  } else {
    return "Invalid Input"
  }
}
//console.log(sphereVolume(10))
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

function coneVolume(radius, height) {
  let coneV
  if (radius > 0 && height > 0) {
    coneV = (1 / 3) * PI * Math.pow(radius, 2) * height 
    return coneV
  } else {
    return "Invalid Input"
 }
}
//console.log(coneVolume(3, 5))
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

function prismVolume(height, width, depth) {
  let prismV
  if (height > 0 && width > 0 && depth > 0) {
    prismV = height * width * depth 
    return prismV
  } else {
    return "Invalid Input"
  }
}
//console.log(prismVolume(3, 4, 5))
console.log(prismVolume(3, 4, 5) === 60);

function totalVolume(solids) {
  let totalV = 0
  for (let s = 0; s < solids.length; s++) {
    if (solids[s].type === "sphere") {
      totalV = totalV + sphereVolume(solids[s].radius)
    } else if (solids[s].type === "cone") {
      totalV = totalV + coneVolume(solids[s].radius, solids[s].height)
    } else if (solids[s].type === "prism") {
      totalV = totalV + prismVolume(solids[s].height, solids[s].width, solids[s].depth)
    } else {
      return "Unrecognized Shape"
    }
  }
  return totalV
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
//console.log(totalVolume(duck))
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000)
