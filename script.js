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
    "Operating Systems",
  ],
  display: function () {
    console.log("name:", this.name);
    console.log("age:", this.age);
    console.log("enrolled:", this.enrolled);
    console.log("courses:", this.courses);
  },
};

console.log("Part 1: Understanding and Creating Objects");
// Console log name and age
console.log(`My name is ${student.name} and I am ${student.age} years old`);
// Console log student method
student.display();
console.log(`\n`);

// Part 2: Working with JSON
console.log("Part 2: Working with JSON");

console.log("Student to JSON");
studentToJSON = JSON.stringify(student);
console.log(studentToJSON);
console.log(`\n`);

console.log("Student back to JS Object");
studentToJSON = JSON.parse(studentToJSON);
console.log(studentToJSON);
console.log(`\n`);

// Part 3: Using Destructuring Assignment
// Use destructuring to extract the name and courses properties from the student object.
console.log("Part 3: Using Destructuring Assignment");
let { name: studentName, courses: studentCourses } = student;
console.log("Destructured name:", studentName);
console.log("Destructured courses:", studentCourses);

// Create an array of scores
let scores = [80, 75, 90, 92, 87];
// Destructure first 2 scores
let [score1, score2] = scores;
console.log("Destructured scores");
console.log("score 1:", score1);
console.log("score 2:", score2);
console.log(`\n`);

// Part 4: The Spread Operator
console.log("Part 4: The Spread Operator");

// Clone student object
let clonedObj = { ...student };
console.log("Cloned student Object:", clonedObj);
console.log(`\n`);

// Add a new property (e.g., graduationYear) to the cloned object and log it.
console.log("Create graduation Year property");
clonedObj.graduationYear = 2026;
console.log("Graduation Year:", clonedObj.graduationYear);
console.log("cloned student object:", clonedObj);
console.log(`\n`);

// Merge two arrays:
let newCourses = ["Python", "Java", "React"];

student.courses = [...student.courses, ...newCourses];
console.log("Combined new courses to student.courses");
console.log("Student.courses:", student.courses);
console.log(`\n`);

// Part 5: Object Methods
console.log("Part 5: Object Methods");
// Add a method to the student object to dynamically add a new course to the courses array.
console.log("Add method to add course");
student.addCourse = function (course) {
  this.courses.push(course);
};

console.log("Added NEW Vue course using method");
student.addCourse("Vue");
console.log(student.courses);
console.log(`\n`);

// Add another method to calculate and return the total number of courses.
console.log("Add method for number of courses");
student.getNumOfCourses = function () {
  return this.courses.length;
};
console.log("Number of courses:", student.getNumOfCourses());
console.log(`\n`);

// BONUS
// Use the reduce method to calculate the average score from the array of scores.
console.log("Bonus, use reduce to get average");

function getSum(total, score) {
  return total + score;
}

function getAverage() {
  let sum = scores.reduce(getSum);
  return sum / scores.length;
}

console.log("Average:", getAverage());

// JS for HTML
const start = document.getElementById("start");
const nameDiv = document.getElementById("nameObject");
const nameInput = document.getElementById("name");
const enterName = document.getElementById("enterName");
const attributesDiv = document.getElementById("attributes");
const objectDiv = document.getElementById("userObject");
const removeAttributesDiv = document.getElementById("removeAttributes");
let userObject = {};
let objectName = "";

start.addEventListener("click", function () {
  start.style.visibility = "hidden";
  nameDiv.style.visibility = "visible";
});

enterName.addEventListener("click", function () {
  if (nameInput.value) {
    objectName = nameInput.value;
    nameDiv.style.visibility = "hidden";
    attributesDiv.style.visibility = "visible";
    objectDiv.style.visibility = "visible";
    const shownName = document.getElementById("showName");
    shownName.textContent = objectName;
  } else {
    alert("Please input a name");
  }
});

const attributeNameInput = document.getElementById("attributeName");
const attributeValueInput = document.getElementById("attributeValue");
const enterAttribute = document.getElementById("enterAttribute");
const shownObject = document.getElementById("object");
const removeBtnsDiv = document.getElementById("removeBtns");

function showObject() {
  stringObj = JSON.stringify(userObject);
  shownObject.innerHTML = "";
  shownObject.innerHTML = stringObj;
}

enterAttribute.addEventListener("click", function () {
  if (attributeNameInput.value.trim() && attributeValueInput.value.trim()) {
    if (Object.keys(userObject).length == 5) {
      alert("Delete an attribute to add one");
      return;
    }
    Object.defineProperty(userObject, attributeNameInput.value, {
      value: attributeValueInput.value,
      enumerable: true,
      configurable: true,
    });
    attributeNameInput.value = "";
    attributeValueInput.value = "";
    showObject();
    removeAttributesDiv.style.visibility = "visible";
    removeBtnsDiv.innerHTML = "";
    for (const [key, value] of Object.entries(userObject)) {
      let removeBtn = document.createElement("button");
      removeBtn.innerHTML = key;
      removeBtn.addEventListener("click", function () {
        delete userObject[key];
        removeBtn.remove();
        showObject();
      });
      removeBtnsDiv.appendChild(removeBtn);
    }
  } else {
    alert("Please input name and value");
  }
});
