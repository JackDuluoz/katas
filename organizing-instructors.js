function organizeInstructors(instructors) {
  let output = {}
  let iOS = []
  let web = []
  let blockchain = []
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "iOS") {
      iOS.push(instructors[i].name)
    } else if (instructors[i].course === "Web") {
      web.push(instructors[i].name)
    } else if (instructors[i].course === "Blockchain") {
      blockchain.push(instructors[i].name)
    }
  }
  for (let i = 0; i < instructors.length; i++) {
    Object.defineProperty(output, instructors[i].course, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    })
  }
  for (let property in output) {
    if (property === "iOS") {
      output[property] = iOS
    } else if (property === "Web") {
      output[property] = web
    } else if (property === "Blockchain") {
      output[property] = blockchain
    }
  }  
  return output    
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));