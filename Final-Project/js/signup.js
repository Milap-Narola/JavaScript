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
import { createUser, getUser, updateUser, } from '../components/user.api.js';




let id = -1;




const handleUser = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    if (id == -1) {

        createUser(user);
    }
    else {
        alert('update user!')
        updateUser(id, user);
    }

}

let data = await getUser()

document.getElementById('signUp').addEventListener('submit', handleUser);

