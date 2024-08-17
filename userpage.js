const taskbtn = document.querySelector('#addtask-btn');

taskbtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "Task.html"
})

const logoutForm = document.querySelector('#act-btn')


logoutForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('logout-email').value

    const data = await fetch('http://localhost:8081/api/v1/users/logoutUser', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email})
    })

    const result = await data.json()

    if (result.successful === true) {
        alert("you logged out")
        window.location.href = "homepage.html";
    }else{
        alert(result.userResponse)
    }
})