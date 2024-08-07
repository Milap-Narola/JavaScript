
export const createUser = async (user) => {
    if (await isExists(user.username)) {
        alert("User already exist!");
        window.location.href = "/Exam/html/login.html";
    }
    else {
        fetch(`https://json-server-deployment-1-0wec.onrender.com/users`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)

            })
        alert('User added successfully!')
        window.location.href = "/Exam/html/login.html";
        // console.log(Data)
    }
}


export const isExists = async (user) => {

    let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users?username=${user.username}`)
    let res = await req.json()

    if (res.length > 0) {
        return true

    }
    else (false)
}

export const getUser = async () => {
    let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users`)
    let res = await req.json()
    return res
}

export const login = async (user) => {
    // console.log(user);
    let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users?username=${user.username}`)
    let res = await req.json()
    
    // console.log(res.length);

    if (res.length == 0) {
        alert("User not found");
        window.location.href = '/Exam/html/signup.html';
    }
    else if (res.length == 1 && res[0].password == user.password) {
        alert("Logged in successfully");

        // document.getElementById("navbar").innerHTML = navbar("logout", res[0].username)
        document.getElementById("navbar").innerHTML = navbar(true, user.username);
        window.location.href = "/Exam/html/food.html"
    }
    else if (res.length == 1 && res[0].password != user.password) {
        alert("password mismatch")
    }
    else {
        alert("Login failed");
        window.location.href = '/Exam/html/signup.html';

    }
}


// export const updateUser = async (id, user) => {
//     let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users/${id}`,
//         {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(user)
//         })
// }

// export const DeleteUser = async (id) => {
//     let req = await fetch(`https://json-server-deployment-1-0wec.onrender.com/users/${id}`, {
//         method: "DELETE",
//     })
// }
