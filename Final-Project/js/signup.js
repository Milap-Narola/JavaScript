// import navbar from "../components/navbar.js";
// document.getElementById("navbar").innerHTML = navbar()
// const postUser=(username, password)=>{
//       fetch('http://localhost:3000/user', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password
//         })
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
//         localStorage.setItem('loggedInUser', data);
//         window.location.href="/Final-Project/html/login.html"
//     })
//     .catch((error)=>console.error('Error:', error));



// }


// document.getElementById('Userdata').addEventListener('submit', (e) => {
//     e.preventDefault();




//         let username = document.getElementById('username').value;
//         let password = document.getElementById('password').value;
//         // console.log(username, password);
//         postUser(username, password);


//     })
import { createUser, getUser, isExists, } from '../components/user.api.js';




// let id = -1;




const handleUser = async (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,

    }
    localStorage.setItem("user", JSON.stringify(user));

    if (await isExists(user.email)) {
        alert("User already exist");
        window.location.href="/Final-Project/html/login.html";
    }
    else {
        await createUser(user);
        alert('update successfull!')
        window.location.href="../Final-Project/html/login.html";
    }

}

let user = await getUser()

document.getElementById('signUp').addEventListener('submit', handleUser);

