import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('userName').value;
    const password = document.getElementById('userPassword').value;

    try {
        const response = await fetch('http://localhost:3000/user');
        const users = await response.json();
        if (users) {
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                document.getElementById('navbar').innerHTML = navbar(users.username); 
                localStorage.setItem('isLogin', 'true'); 
                window.location.href = '/Final-Project/html/index.html';
            } else {
                alert('Invalid username or password' );
                window.location.href = '/Final-Project/html/signup.html';
            }
        } else {
            alert('No users found');
            window.location.href = '/Final-Project/html/signup.html';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
