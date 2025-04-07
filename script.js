
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
console.log(`\n`)


// Part 2: Working with JSON
console.log("Part 2: Working with JSON")

console.log("Student to JSON")
studentToJSON = JSON.stringify(student)
console.log(studentToJSON)
console.log(`\n`)

console.log("Student back to JS Object")
studentToJSON = JSON.parse(studentToJSON)
console.log(studentToJSON)
console.log(`\n`)


// Part 3: Using Destructuring Assignment
// Use destructuring to extract the name and courses properties from the student object.
console.log("Part 3: Using Destructuring Assignment")
let {name: studentName, courses: studentCourses} = student
console.log("Destructured name:", studentName)
console.log("Destructured courses:", studentCourses)

// Create an array of scores
let scores = [80, 75, 90, 92, 87]
// Destructure first 2 scores
let [score1, score2] = scores
console.log("Destructured scores")
console.log("score 1:", score1)
console.log("score 2:", score2)
console.log(`\n`)


// Part 4: The Spread Operator
console.log("Part 4: The Spread Operator")

// Clone student object
let clonedObj = {...student}
console.log("Cloned student Object:", clonedObj)
console.log(`\n`)

// Add a new property (e.g., graduationYear) to the cloned object and log it.
console.log("Create graduation Year property")
clonedObj.graduationYear = 2026
console.log("Graduation Year:", clonedObj.graduationYear)
console.log("cloned student object:", clonedObj)
console.log(`\n`)

// Merge two arrays:
let newCourses = [
    "Python",
    "Java",
    "React"
]

student.courses = [...student.courses, ...newCourses]
console.log("Combined new courses to student.courses")
console.log("Student.courses:", student.courses)