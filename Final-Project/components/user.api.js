
export const createUser = async (Data) => {
    if (await isExists(user.email)) {
        alert("User already exists");
    }
    else {
        fetch(`http://localhost:3000/users`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Data)

            })
        // console.log(Data)
    }
}


export const isExists = async (user) => {


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
    else {
        if (res[0].password == user.password) {
            alert("Logged in");
        }
        else {
            alert("password is incorrect");
        }
    }
}

export const updateUser = async (id, data) => {
    let req = await fetch(`http://localhost:3000/users/${id}`,
        {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
}

export const DeleteUser = async (id) => {
    let req = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
    })
}
