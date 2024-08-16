const form = document.querySelector("#signup-form");

form.addEventListener( "submit",async (e) =>{
    e.preventDefault();
    const userName = document.getElementById("username-input").value
    const email = document.getElementById("user-email").value
    const password = document.getElementById("user-password").value

    const result = await fetch('http://localhost:8081/api/v1/users/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName: userName, email: email, password: password})
        })

    const data = await result.json()

    if (data.successful) {
        window.location.href = "homepage.html";
    }else{
        alert(data.userResponse)
    }
})
