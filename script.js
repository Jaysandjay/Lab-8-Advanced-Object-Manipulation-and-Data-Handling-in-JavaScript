
// Part 1: Understanding and Creating Objects

// Create Student Object
let student = {
    name: "Jasmine",
    age: 28,
    enrolled: true,
    courses: [
        "Algorithms", 
        "Databases", 
        "JavaScript", 
        "Technical Writing", 
        "Web Design", 
        "Operating Systems"
    ],
    display: function(){
        console.log("name:", this.name)
        console.log("age:", this.age)
        console.log("enrolled:", this.enrolled)
        console.log("courses:", this.courses)

    }
}


console.log("Part 1: Understanding and Creating Objects")
// Console log name and age
console.log(`My name is ${student.name} and I am ${student.age} years old`)
// Console log student method
student.display()
console.log(`/n`)