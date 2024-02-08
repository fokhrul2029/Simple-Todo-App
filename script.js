// Element Selector
const userInput = document.querySelector("#userInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector(".todo-list");

// generateRandomColor Function
function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
// Event Listeners
addBtn.onclick = (e) => {
  e.preventDefault();
  if (userInput.value.trim()) {
    // Created Elements
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const btn = document.createElement("input");

    // added attribute and value on elements
    li.textContent = userInput.value;
    btn.setAttribute("type", "button");
    btn.classList.add("btn");
    btn.setAttribute("id", "changeBtn");
    btn.setAttribute("value", "Change Color");
    // onclick Event for change color
    btn.onclick = () => {
      let randomColors = generateRandomColor();
      li.style.color = randomColors;
      li.style.borderColor = randomColors;
    };
    // added elements on html document
    todoList.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(btn);
    userInput.value = "";
  } else {
    userInput.classList.add("empty");
  }
};
userInput.addEventListener("keypress", () => {
  userInput.classList.remove("empty");
});
