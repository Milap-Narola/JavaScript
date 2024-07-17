import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

const deletUser= async()=>{
    const username = localStorage.getItem('loggedInUser');
    fetch(`http://localhost:3000/user/${username}`, {
        method: 'DELETE',
    })
   .then(response =>  response.json())
   .then(()=>{
        localStorage.removeItem('loggedInUser');
        document.getElementById('navbar').innerHTML=navbar();
        window.location.href = '/Final-Project/html/login.html'; 
    { 
        console.error('Error:', error); 
    };
       
})}









document.getElementById('loginForm').addEventListener('submit',  (e) => {
    e.preventDefault();

    const username = document.getElementById('userName').value;
    const password = document.getElementById('userPassword').value;

    fetch('http://localhost:3000/user')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert('Login successful!');
                localStorage.setItem('loggedInUser', username);
                document.getElementById('navbar').innerHTML=("Logout",user,username);
                window.location.href = '/Final-Project/html/index.html'; 
            } else {
                alert('Please Sign Up');
                window.location.href = '/Final-Project/html/signup.html'; 
            }
        })
        .catch(error => console.error('Error:', error));
});
