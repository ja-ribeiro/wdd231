const courses = [
  { code: "WDD130", credits: 3, completed: true, type: "WDD" },
  { code: "WDD131", credits: 3, completed: true, type: "WDD" },
  { code: "WDD231", credits: 3, completed: false, type: "WDD" },
  { code: "CSE111", credits: 3, completed: false, type: "CSE" }
];

const container = document.getElementById("courseContainer");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const div = document.createElement("div");
    div.textContent = course.code;
    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    }

    container.appendChild(div);
  });

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  totalCredits.textContent = `Total credits: ${total}`;
}

document.getElementById("all").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wdd").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.type === "WDD"));
});

document.getElementById("cse").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.type === "CSE"));
});

displayCourses(courses);