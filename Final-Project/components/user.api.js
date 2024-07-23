
export const createUser = async (user) => {
    if (await isExists(user.email)) {
        alert("User already exist");
        window.location.href="/Final-Project/html/login.html";
    }
    else {
        fetch(`http://localhost:3000/users`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)

            })
            window.location.href="/Final-Project/html/login.html";
        // console.log(Data)
    }
}


export const isExists = async (email) => {


    let req = await fetch(`http://localhost:3000/users?email=${email}`)
    let res = await req.json()



        let req = await fetch(`http://localhost:3000/users?email=${email}`)
        let res = await req.json()


    if (res.length > 0) {
        return true
    }

    else (false)
}




export const getUser = async () => {
    let req = await fetch(`http://localhost:3000/users`)
    let res = await req.json()
    return res
}

export const login = async (user) => {
    let req = await fetch(`http://localhost:3000/users?email=${user.email}`)
    let res = await req.json()

    if (res.length == 0) {
        alert("User not found");
    }
    else if (res.length == 1 && res[0].password == user.password) {
        alert("Logged in");

        document.getElementById("navbar").innerHTML = navbar("logout", res[0].username)
    }
    else if (res.length == 1 && res[0].password != user.password) {
        alert("password mismatch")
    }
    else {
        alert("Login failed");
        window.location.href = '/Final-Project/html/signup.html';

    }
}


export const updateUser = async (id, user) => {
    let req = await fetch(`http://localhost:3000/users/${id}`,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
}

export const DeleteUser = async (id) => {
    let req = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
    })
}
