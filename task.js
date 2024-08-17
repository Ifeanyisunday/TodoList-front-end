const createTask = document.querySelector(".addBtn");

createTask.addEventListener("click", (e) => {
    e.preventDefault();
    const ulTag = document.querySelector("#TaskList");
    const createList = document.createElement("li")
    ulTag.appendChild(createList);
})