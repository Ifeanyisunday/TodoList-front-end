
const newform = document.querySelector("#pop-up");
newform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const note = document.getElementById("task-note").value;
    const priority = document.getElementById("priority").value;
    const email = document.getElementById("user-email").value;

    const data = await fetch('http://localhost:8081/api/v1/task/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, note: note, priority: priority, email: email})
    })

    const result = await data.json()

    if (result.successful) {
        alert("Task created")
        const ulTag = document.querySelector("#TaskList");
        const createList = document.createElement("li")
        ulTag.appendChild(createList);
        createList.textContent = `${title}, ${note}, ${priority}`;
        const popup = document.querySelector("#pop-up")
        popup.style.opacity = "0";
    }else{
        alert("something went wrong")
    }

})

document.querySelector("#addBtn").addEventListener('click', (e) => {
    const popup = document.querySelector("#pop-up")
    popup.style.opacity = "1";

})

const close = document.querySelector("#close-btn")
close.addEventListener("click", (e) => {
    e.preventDefault();
    const popup = document.querySelector("#pop-up")
    popup.style.opacity = "0";
})