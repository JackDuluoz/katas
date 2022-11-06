function checkAir(samples, threshold) {
  let dirtySamples = []
  let percentDirtySamples
  for (quality = 0; quality < samples.length; quality++) {
    if (samples[quality] === "dirty") {
      dirtySamples.push(samples[quality])
    }
  }
  percentDirtySamples = dirtySamples.length / samples.length
  if (percentDirtySamples >= threshold) {
    return "Polluted"
  } else {
    return "Clean"
  }  
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
