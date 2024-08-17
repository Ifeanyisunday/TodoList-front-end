const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    const email = document.getElementById("user-email").value
    const password = document.getElementById("user-password").value

    const data = await fetch('http://localhost:8081/api/v1/users/loginUser', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password})
    })

    const result = await data.json()

    if (result.successful) {
        alert("Successfully logged in")
        window.location.href = "homesignin.html";
    }else{
        alert(result.userResponse)
    }
})
