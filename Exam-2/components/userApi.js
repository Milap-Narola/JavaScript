import navbar from "../components/navbar.js";


export const isExists = async (user) => {
    let req = await fetch(`https://json-server-deployment-6.onrender.com/user?email=${user.email}`);
    let res = await req.json();

    if (res.length > 0) {
        return true;
    } else {
        return false;
    }
};

export const createUser = async (user) => {
    if (await isExists(user)) {
        alert("User already exists!");
        window.location.href = "/Exam-2/html/login.html";
    } else {
        await fetch(`https://json-server-deployment-6.onrender.com/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        alert('User added successfully!');
        window.location.href = "/Exam-2/html/login.html";
    }
};

export const getUser = async () => {
    let req = await fetch(`https://json-server-deployment-6.onrender.com/user`);
    let res = await req.json();
    return res;
};
export const login = async (user) => {
    let req = await fetch(`https://json-server-deployment-6.onrender.com/user?email=${user.email}`);
    let res = await req.json();
    
    if (res.length == 0) {
        alert("User not found");
        window.location.href = '/Exam-2/html/signup.html';
    } else if (res.length == 1 && res[0].password == user.password) {
        alert("Logged in successfully");
        document.getElementById("navbar").innerHTML = navbar("logout", user.email)
        
        
        // localStorage.setItem("username", res[0].username);
        window.location.href = "/Exam-2/html/index.html";
        
        localStorage.setItem("isLogin", true);
        // let user = JSON.parse(localStorage.getItem("user"));
    }
    else if (res.length == 1 && res[0].password != user.password) {
        alert("Password mismatch");

    }
    else {
        alert("Login failed");
        window.location.href = '/Exam-2/html/signup.html';
    }
};