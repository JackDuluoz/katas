function instructorWithLongestName(instructors) {
  let names =[]
  for (instructor of instructors) {
    names.push(instructor.name.length)
  }  
  let longestName = Math.max(...names)
  let output = []
  for (instructor of instructors) {
    if (instructor.name.length === longestName) {
      output.push(instructor)
    }
  }
  return output[0]
}

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));
