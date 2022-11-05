function numberOfVowels(data) {
  let vowels = []
  for (let letter = 0; letter < data.length; letter++) {
    if (data[letter] === "a" || data[letter] === "e" || data[letter] === "i" || data[letter] === "o" || data[letter] === "u") {
      vowels.push(data[letter])
    }
  }
  return vowels.length
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));