


export const isExists = async (email) => {

    let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users?email=${email}`)
    let res = await req.json()

    if (res.length > 0) {
        return true

    }
    else (false)
}


export const createUser = async (user) => {
    if (await isExists(user.email)) {
        alert("User already exist!");
        window.location.href = "/Exam-2/html/login.html";
    }
    else {
        fetch(`https://json-server-deployment-1-0wec.onrender.com/users`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)

            })
        alert('User added successfully!')
        window.location.href = "/Exam-2/html/login.html";
        // console.log(user)
    }
}



export const getUser = async () => {
    let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users`)
    let res = await req.json()
    return res
}

export const login = async (user) => {
    // console.log(user);

    let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users?email=${user.email}`)
    let res = await req.json()

    // console.log(res.length);

    if (res.length == 0) {
        alert("User not found");
        window.location.href = '/Exam-2/html/signup.html';
    }
    else if (res.length == 1 && res[0].password == user.password) {
        alert("Logged in successfully");

        document.getElementById("navbar").innerHTML = navbar(true, user.username);
        window.location.href = "/Exam-2/html/index.html"
        localStorage.setItem("username", res[0].username);
        localStorage.setItem("isLogin", true)

    }
    else if (res.length == 1 && res[0].password != user.password) {
        alert("password mismatch")
    }
    else {
        alert("Login failed");
        window.location.href = '/Exam-2/html/signup.html';

    }
}
